import { Injectable } from '@nestjs/common'

import { PrismaService } from '@/src/core/prisma/prisma.service'

import { CreateCharacteristicInput } from './inputs/create-characteristic.input'
import { UpdateCharacteristicInput } from './inputs/update-charateristic.input'
import { CharacteristicModel } from './models/characteristic.model'

@Injectable()
export class CharacteristicService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(input: CreateCharacteristicInput) {
    await this.prismaService.characteristic.create({
      data: {
        name: input.name,
        type: input.type,
        group: input.group,
        categoryId: input.categoryId,
        unitSuffix: input.unitSuffix
      }
    })
    return true
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

  async getCharacteristics(id: string) {
    const values = await this.prismaService.characteristic.findMany({
      where: {
        categoryId: id
      }
    })

    const groupedCharacteristics = values.reduce((acc, characteristic) => {
      
      const group = characteristic.group 

      if (!acc[group]) {
        acc[group] = [];
      }

      acc[group].push(characteristic);

      return acc;
    }, {} as Record<string, CharacteristicModel[]>);

    const orderedGroups: Record<string, CharacteristicModel[]> = {};

    if(groupedCharacteristics['Основные']) {
      orderedGroups['Основные'] = groupedCharacteristics['Основные'];
      delete groupedCharacteristics['Основные'];
    }

    const otherGroups = Object.keys(groupedCharacteristics)
      .sort()
      .reduce((acc, key) => {
        acc[key] = groupedCharacteristics[key];
        return acc;
      }, {} as Record<string, CharacteristicModel[]>);

    Object.assign(orderedGroups, otherGroups);

    if(groupedCharacteristics['Дополнительно']) {
      orderedGroups['Дополнительно'] = groupedCharacteristics['Дополнительно'];
      delete groupedCharacteristics['Дополнительно'];
    }
    
    return orderedGroups
  }
}
