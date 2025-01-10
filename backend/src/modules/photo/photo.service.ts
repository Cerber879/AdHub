import { Injectable } from '@nestjs/common'

import { PrismaService } from '@/src/core/prisma/prisma.service'

import { CreatePhotoInput } from './inputs/create-photo.input'
import { UpdatePhotoInput } from './inputs/update-photo.input'

@Injectable()
export class PhotoService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(input: CreatePhotoInput) {
    await this.prismaService.photo.create({
      data: {
        link: input.link,
        announcementID: input.announcementID
      }
    })

    return true
  }

  async findByAnnouncementId(announcementID: string) {
    const photos = await this.prismaService.photo.findMany({
      where: {
        announcementID
      },
      select: { link: true }
    })

    return photos.map(photo => photo.link)
  }

  async delete(id: string) {
    await this.prismaService.photo.delete({
      where: {
        id
      }
    })

    return true
  }
}
