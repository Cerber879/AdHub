import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/src/core/prisma/prisma.service';
import { CreatePhotoInput } from './inputs/create-photo.input';
import { UpdatePhotoInput } from './inputs/update-photo.input';

@Injectable()
export class PhotoService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(input: CreatePhotoInput) {
    await this.prismaService.photo.create({
      data: {
        name: input.name,
        resolution: input.resolution,
        link: input.link,
        announcementID: input.announcementID,
      },
    });

    return true
  }

  async findByAnnouncementID(announcementID: string) {
    return this.prismaService.photo.findMany({
      where: { 
        announcementID 
      },
    });
  }

  async delete(id: string) {
    await this.prismaService.photo.delete({
      where: {
        id 
      },
    });

    return true;
  }
}
