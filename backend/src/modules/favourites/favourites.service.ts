import { User } from '@/prisma/generated';
import { PrismaService } from '@/src/core/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { AddFavouriteInput } from './inputs/add-favourite.input';

@Injectable()
export class FavouritesService {
    public constructor(private readonly prismaService: PrismaService) {}
    
    async add(input: AddFavouriteInput, user: User) {
        const { announcementID, ...rest } = input;
        const existing = await this.prismaService.favourites.findFirst({ where: { announcementID, userID: user.id } });
        if (existing) {
            throw new NotFoundException('Объявление уже добавлено в избранное');
        }

        await this.prismaService.favourites.create({
            data: {
                ...rest,
                announcement: {
                    connect: {
                    id: announcementID
                    }
                },
                user: {
                    connect: {
                    id: user.id
                    }
                },
            }
        })
        return true
    }
    async delete(id: string, user: User) {
        const existing = await this.prismaService.favourites.findUnique({ where: { id, userID: user.id } });
    
        if (!existing) {
          throw new NotFoundException('Объявление не найдено');
        }
    
        await this.prismaService.favourites.delete({ 
            where: {
                id
            } 
        });
    
        return true;
      }
    async getFavouritesByUserId(userId: string) {
        return this.prismaService.favourites.findMany({
            where: {
                userID: userId
            },
        })
    }
    
}
