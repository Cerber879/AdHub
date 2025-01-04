import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/src/core/prisma/prisma.service';
import { CreateAnnouncementInput } from './inputs/create-announcement.input';
import { UpdateAnnouncementInput } from './inputs/update-announcement.input';
import { User} from '@/prisma/generated';
import { parseAnnouncementCondition, parseAnnouncementStatus } from '@/src/shared/utils/parse-types-ad';

@Injectable()
export class AnnouncementService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(input: CreateAnnouncementInput, user: User) {
    const { categoryId, status, condition, ...rest } = input;

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
        },
        
      },
    });

    return true
  }

  async findById(id: string) {
    const announcement = await this.prismaService.announcement.findUnique({ 
        where: { 
          id
        }
    });

    if (!announcement) {
      throw new NotFoundException('Объявление не найдено');
    }

    return announcement;
  }

  async findByCategory(categoryId: string) {
    return this.prismaService.announcement.findMany({
      where: {
          categoryId
        },
    });
  }

  async update(id: string, input: UpdateAnnouncementInput) {
    const { categoryId, status, condition, ...rest } = input;

    const existing = await this.prismaService.announcement.findUnique({ 
        where: {
          id
        } 
    });

    if (!existing) {
      throw new NotFoundException('Объявление не найдено');
    }

    return this.prismaService.announcement.update({
      where: { 
        id 
      },
      data: 
        {
            name: rest.name ? rest.name : existing.name,
            price: rest.price ? rest.price : existing.price,
            description: rest.description ? rest.description : existing.description,
            status: status ? parseAnnouncementStatus(status) : existing.status,
            condition: condition ? parseAnnouncementCondition(condition) : existing.condition,
            category: {
                connect: {
                    id: categoryId ? categoryId : existing.categoryId
                }
            },
        },
    });

  }

  async delete(id: string) {
    const existing = await this.prismaService.announcement.findUnique({ where: { id } });

    if (!existing) {
      throw new NotFoundException('Объявление не найдено');
    }

    await this.prismaService.announcement.delete({ 
        where: {
            id
        } 
    });

    return true;
  }
}