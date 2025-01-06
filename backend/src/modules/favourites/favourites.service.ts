import { User } from '@/prisma/generated';
import { PrismaService } from '@/src/core/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { AddFavouriteInput } from './inputs/add-favourite.input';

@Injectable()
export class FavouritesService {
    public constructor(private readonly prismaService: PrismaService) {}
    
    async add(input: AddFavouriteInput, user: User) {
        const { announcementID, ...rest } = input;
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

    }

    
}
