import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/src/core/prisma/prisma.service';
import { CreatePhotoInput } from './inputs/create-photo.input';
import { UpdatePhotoInput } from './inputs/update-photo.input';

@Injectable()
export class PhotoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(input: CreatePhotoInput) {
    return this.prisma.photo.create({
      data: {
        name: input.name,
        resolution: input.resolution,
        link: input.link,
        announcementID: input.announcementID,
      },
    });
  }

  async findByAnnouncementID(announcementID: string) {
    return this.prisma.photo.findMany({
      where: { 
        announcementID 
      },
    });
  }

  async update(id: string, input: UpdatePhotoInput) {
    return this.prisma.photo.update({
      where: { 
        id 
      },
      data: input,
    });
  }

  async delete(id: string) {
    await this.prisma.photo.delete({
      where: {
        id 
      },
    });
    return true;
  }
}
