import { Injectable } from '@nestjs/common'

import { PrismaService } from '@/src/core/prisma/prisma.service'

import { AddToAnnouncementInput } from './inputs/add-to-announcement.input'
import { UpdateAnnouncementCharacteristicInput } from './inputs/update-announcement-characteristic.input'

@Injectable()
export class AnnouncementCharacteristicService {
  constructor(private readonly prismaService: PrismaService) {}

  async addToAnnouncement(productId: string, input: AddToAnnouncementInput) {
    const existing =
      await this.prismaService.announcementCharacteristic.findMany({
        where: {
          characteristicId: input.characteristicId,
          productId: productId
        }
      })
    if (existing.length > 0) {
      throw new Error('Такая характеристика уже существует')
    }
    await this.prismaService.announcementCharacteristic.create({
      data: {
        value: input.value,
        productId: productId,
        characteristicId: input.characteristicId
      }
    })
    return true
  }
  async getByAnnouncementId(id: string) {
    return this.prismaService.announcementCharacteristic.findMany({
      where: {
        productId: id
      }
    })
  }

  async updateById(id: string, input: UpdateAnnouncementCharacteristicInput) {
    await this.prismaService.announcementCharacteristic.update({
      where: {
        id
      },
      data: {
        value: input.value,
        characteristicId: input.characteristicId
      }
    })
    return true
  }
  async deleteById(id: string) {
    await this.prismaService.announcementCharacteristic.delete({
      where: {
        id
      }
    })
    return true
  }
}
