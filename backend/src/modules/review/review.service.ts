import {
  ConflictException,
  Injectable,
  NotFoundException
} from '@nestjs/common'

import { User } from '@/prisma/generated'
import { PrismaService } from '@/src/core/prisma/prisma.service'

import { CreateReviewInput } from './inputs/create-review.input'
import { UpdateReviewInput } from './inputs/update-review.input'

@Injectable()
export class ReviewService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(user: User, input: CreateReviewInput) {
    const { userId, ...rest } = input

    const existingReview = await this.prismaService.review.findFirst({
      where: {
        reviewerId: user.id, 
        userId: userId,     
        announcementId: input.announcementId, 
      },
    });
  
    if (existingReview) {
      throw new ConflictException('Вы уже оставили отзыв на это объявление.');
    }

    await this.prismaService.review.create({
      data: {
        ...rest,
        reviewerId: user.id,
        userId: userId
      }
    })

    const reviews = await this.prismaService.review.findMany({
      where: {
        userId: userId
      }
    })

    const totalReviews = reviews.length
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0)

    const averageRating = totalReviews > 0 ? totalRating / totalReviews : 0

    await this.prismaService.user.update({
      where: {
        id: userId
      },
      data: {
        rating: averageRating
      }
    })

    return true
  }

  async getMyReviews(userId: string) {
    return this.prismaService.review.findMany({
      where: {
        userId: userId
      },
      include: {
        announcement: true,
        reviewer: true
      },
      orderBy: {
        createdAt: 'desc' 
      }
    })
  }

  async getReviewsByUser(userId: string) {
    return this.prismaService.review.findMany({
      where: {
        userId: userId
      },
      include: {
        announcement: true,
        reviewer: true
      },
      orderBy: {
        createdAt: 'desc' 
      }
    })
  }

  async getReviewsByAnnouncement(announcementId: string) {
    return this.prismaService.review.findMany({
      where: {
        announcementId
      },
      include: {
        announcement: true
      },
      orderBy: {
        createdAt: 'desc' 
      }
    })
  }

  async update(user: User, id: string, input: UpdateReviewInput) {
    const existing = await this.prismaService.review.findUnique({
      where: {
        id
      }
    })

    if (!existing) {
      throw new NotFoundException('Отзыв не найден')
    }

    if (existing.userId !== user.id) {
      throw new ConflictException('Это не ваш отзыв')
    }

    await this.prismaService.review.update({
      where: { id },
      data: {
        ...input,
        updatedAt: new Date()
      }
    })

    return true
  }

  async delete(user: User, id: string) {
    const existing = await this.prismaService.review.findUnique({
      where: { id }
    })

    if (!existing) {
      throw new NotFoundException('Отзыв не найден')
    }

    if (existing.userId !== user.id) {
      throw new ConflictException('Это не ваш отзыв')
    }

    await this.prismaService.review.delete({
      where: { id }
    })

    const reviews = await this.prismaService.review.findMany({
      where: {
        userId: user.id
      }
    })

    const totalReviews = reviews.length
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0)

    const averageRating = totalReviews > 0 ? totalRating / totalReviews : 0

    await this.prismaService.user.update({
      where: {
        id: user.id
      },
      data: {
        rating: averageRating
      }
    })

    return true
  }
}
