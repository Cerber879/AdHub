import { Injectable } from '@nestjs/common'

import { PrismaService } from '@/src/core/prisma/prisma.service'

import { CreateCharacteristicInput } from './inputs/create-characteristic.input'
import { UpdateCharacteristicInput } from './inputs/update-charateristic.input'

@Injectable()
export class CharacteristicService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(input: CreateCharacteristicInput) {
    await this.prismaService.characteristic.create({
      data: {
        name: input.name,
        type: input.type,
        categoryId: input.categoryId
      }
    })
    return true
  }
  async getCharacteristicByCategory(categoryId: string) {
    return this.prismaService.characteristic.findMany({
      where: {
        categoryId
      }
    })
  }

  async updateCharacteristic(id: string, input: UpdateCharacteristicInput) {
    await this.prismaService.characteristic.update({
      where: {
        id
      },
      data: input
    })
    return true
  }

  async delete(id: string) {
    await this.prismaService.characteristic.delete({
      where: {
        id
      }
    })
    return true
  }
}
