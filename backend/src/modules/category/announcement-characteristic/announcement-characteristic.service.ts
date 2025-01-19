import { Injectable } from '@nestjs/common'

import { PrismaService } from '@/src/core/prisma/prisma.service'

import { AddToAnnouncementInput } from './inputs/add-to-announcement.input'
import { UpdateAnnouncementCharacteristicInput } from './inputs/update-announcement-characteristic.input'
import { AnnouncementCharacteristicResponse } from './responses/announcement.response'

@Injectable()
export class AnnouncementCharacteristicService {
  constructor(private readonly prismaService: PrismaService) {}

  async addToAnnouncement(
    productId: string,
    input: Record<string, AddToAnnouncementInput>
  ) {
    for (const [key, item] of Object.entries(input)) {
      console.log(item, productId, key)
      await this.prismaService.announcementCharacteristic.create({
        data: {
          value: item.toString(),
          productId: productId,
          characteristicId: key
        }
      })
    }
    return true
  }

  async getByAnnouncementId(id: string) {
    const values = await this.prismaService.announcementCharacteristic.findMany(
      {
        where: {
          productId: id
        },
        include: {
          characteristic: true
        }
      }
    )

    const groupedCharacteristics = values.reduce(
      (acc, content) => {
        const group = content.characteristic.group

        if (!acc[group]) {
          acc[group] = []
        }

        acc[group].push({
          value: content.value,
          characteristic: content.characteristic.name,
          unitSuffix: content.characteristic.unitSuffix,
          type: content.characteristic.type
        })

        return acc
      },
      {} as Record<string, AnnouncementCharacteristicResponse[]>
    )

    const orderedGroups: Record<string, AnnouncementCharacteristicResponse[]> =
      {}

    if (groupedCharacteristics['Основные']) {
      orderedGroups['Основные'] = groupedCharacteristics['Основные']
      delete groupedCharacteristics['Основные']
    }

    const otherGroups = Object.keys(groupedCharacteristics)
      .sort()
      .reduce(
        (acc, key) => {
          acc[key] = groupedCharacteristics[key]
          return acc
        },
        {} as Record<string, AnnouncementCharacteristicResponse[]>
      )

    Object.assign(orderedGroups, otherGroups)

    if (groupedCharacteristics['Дополнительно']) {
      orderedGroups['Дополнительно'] = groupedCharacteristics['Дополнительно']
      delete groupedCharacteristics['Дополнительно']
    }

    return orderedGroups
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

  async deleteByAnnouncementId(id: string) {
    await this.prismaService.announcementCharacteristic.deleteMany({
      where: {
        productId: id
      }
    })
    
    return true
  }
}
