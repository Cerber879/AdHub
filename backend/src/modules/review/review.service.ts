import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/src/core/prisma/prisma.service';
import { CreateReviewInput } from './inputs/create-review.input';
import { UpdateReviewInput } from './inputs/update-review.input';
import { User } from '@/prisma/generated';

@Injectable()
export class ReviewService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(input: CreateReviewInput) {
    await this.prismaService.review.create({
      data: {
        ...input
      },
    });
    return true;
  }

  async getMyReviews(userId: string) {
    return this.prismaService.review.findMany({
      where: { 
        userId 
      },
      include: {
        announcement: true, 
      },
    });
  }

  async getReviewsByUser(userId: string) {
    return this.prismaService.review.findMany({
      where: { 
        userId 
      },
      include: {
        announcement: true
      },
    });
  }

  async getReviewsByAnnouncement(announcementId: string) {
    return this.prismaService.review.findMany({
      where: { 
        announcementId 
      },
      include: {
        announcement: true
      },
    });
  }

  async update(user: User, id: string, input: UpdateReviewInput) {
    const existing = await this.prismaService.review.findUnique({
      where: {
        id 
      },
    });

    if (!existing) {
      throw new NotFoundException('Отзыв не найден');
    }

    if (existing.userId !== user.id) {
      throw new ConflictException('Это не ваш отзыв');
    }

    await this.prismaService.review.update({
      where: { id },
      data: {
        ...input,
        updatedAt: new Date()
      },
    });

    return true;
  }

  async delete(user: User,id: string) {
    const existing = await this.prismaService.review.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new NotFoundException('Отзыв не найден');
    }

    if(existing.userId !== user.id) {  
      throw new ConflictException('Это не ваш отзыв');
    }

    await this.prismaService.review.delete({
      where: { id },
    });

    return true;
  }
}
