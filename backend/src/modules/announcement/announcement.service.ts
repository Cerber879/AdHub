import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'

import { User } from '@/prisma/generated'
import { PrismaService } from '@/src/core/prisma/prisma.service'
import {
  parseAnnouncementCondition,
  parseAnnouncementStatus
} from '@/src/shared/utils/parse-types-ad'

import { FavouritesModel } from '../favourites/models/favourite.model'

import { CreateAnnouncementInput } from './inputs/create-announcement.input'
import { AnnouncementFiltersInput } from './inputs/search-announcement.input'
import { UpdateAnnouncementInput } from './inputs/update-announcement.input'
import { AnnouncementModel } from './models/announcement.model'

@Injectable()
export class AnnouncementService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(input: CreateAnnouncementInput, user: User) {
    const { categoryId, status, condition, ...rest } = input

    const announcementStatus = parseAnnouncementStatus(status)
    const announcementCondition = parseAnnouncementCondition(condition)

    await this.prismaService.announcement.create({
      data: {
        ...rest,
        status: announcementStatus,
        condition: announcementCondition,
        category: {
          connect: {
            id: categoryId
          }
        },
        user: {
          connect: {
            id: user.id
          }
        }
      }
    })

    return true
  }

  findAllAnnouncements() {
    return this.prismaService.announcement.findMany({})
  }

  async findManyWithFilters(filters: AnnouncementFiltersInput) {
    const {
      minPrice,
      maxPrice,
      condition,
      status,
      search,
      sort,
      skip,
      take,
      categoryId
    } = filters

    const announcementStatus = parseAnnouncementStatus(status)
    const announcementCondition = parseAnnouncementCondition(condition)

    if (
      filters.minPrice &&
      filters.maxPrice &&
      filters.minPrice > filters.maxPrice
    ) {
      throw new BadRequestException('minPrice не может быть больше maxPrice')
    }

    const query = this.prismaService.announcement.findMany({
      where: {
        AND: [
          minPrice ? { price: { gte: minPrice } } : {},
          maxPrice ? { price: { lte: maxPrice } } : {},
          announcementCondition !== null
            ? { condition: announcementCondition }
            : {},
          announcementStatus !== null ? { status: announcementStatus } : {},
          categoryId ? { categoryId: categoryId } : {},
          search !== null && search !== ''
            ? {
                OR: [
                  {
                    name: {
                      contains: search,
                      mode: 'insensitive'
                    }
                  },
                  {
                    description: {
                      contains: search,
                      mode: 'insensitive'
                    }
                  }
                ]
              }
            : {}
        ]
      },
      orderBy: sort
        ? sort === 'price_asc'
          ? { price: 'asc' }
          : sort === 'price_desc'
            ? { price: 'desc' }
            : sort === 'date'
              ? { placementDate: 'desc' }
              : sort === 'name_asc'
                ? { name: 'asc' }
                : sort === 'name_desc'
                  ? { name: 'desc' }
                  : {}
        : {},
      skip,
      take
    })

    return query
  }

  async findById(id: string) {
    const announcement = await this.prismaService.announcement.findUnique({
      where: {
        id
      }
    })

    if (!announcement) {
      throw new NotFoundException('Объявление не найдено')
    }

    return announcement
  }

  async findByIds(data: string[]) {
    // Массив промисов для всех запросов
    const adsPromises = data.map(async id => {
      const announcement = await this.prismaService.announcement.findUnique({
        where: {
          id
        }
      })
      return announcement
    })

    const ads = await Promise.all(adsPromises)

    if (ads.length === 0) {
      throw new NotFoundException('Объявлений не найдено')
    }

    return ads
  }

  async findByProfile(user: User) {
    const announcement = await this.prismaService.announcement.findMany({
      where: {
        userId: user.id
      }
    })

    if (!announcement) {
      throw new NotFoundException('Объявление не найдено')
    }

    return announcement
  }

  async findByName(name: string) {
    const announcement = await this.prismaService.announcement.findMany({
      where: {
        name
      }
    })

    if (!announcement) {
      throw new NotFoundException('Объявление не найдено')
    }

    return announcement
  }

  async findByCategory(categoryId: string) {
    return this.prismaService.announcement.findMany({
      where: {
        categoryId
      }
    })
  }

  async update(id: string, input: UpdateAnnouncementInput) {
    const { categoryId, status, condition, ...rest } = input

    const existing = await this.prismaService.announcement.findUnique({
      where: {
        id
      }
    })

    if (!existing) {
      throw new NotFoundException('Объявление не найдено')
    }

    return this.prismaService.announcement.update({
      where: {
        id
      },
      data: {
        name: rest.name ? rest.name : existing.name,
        price: rest.price ? rest.price : existing.price,
        description: rest.description ? rest.description : existing.description,
        status: status ? parseAnnouncementStatus(status) : existing.status,
        condition: condition
          ? parseAnnouncementCondition(condition)
          : existing.condition,
        category: {
          connect: {
            id: categoryId ? categoryId : existing.categoryId
          }
        }
      }
    })
  }

  async delete(id: string) {
    const existing = await this.prismaService.announcement.findUnique({
      where: { id }
    })

    if (!existing) {
      throw new NotFoundException('Объявление не найдено')
    }

    await this.prismaService.announcement.delete({
      where: {
        id
      }
    })

    return true
  }
}
