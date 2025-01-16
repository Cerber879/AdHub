import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { CharacteristicService } from './characteristic.service'
import { CreateCharacteristicInput } from './inputs/create-characteristic.input'
import { UpdateCharacteristicMixedInput } from './inputs/update-charateristic.input'
import { CharacteristicsResponse } from './responses/characteristic.response'


@Resolver()
export class CharacteristicResolver {
  constructor(private readonly characteristicService: CharacteristicService) {}

  @Mutation(() => Boolean, { name: 'createCharacteristic' })
  async createCharacteristic(@Args('data') input: CreateCharacteristicInput) {
    return this.characteristicService.create(input)
  }

  @Mutation(() => Boolean, { name: 'deleteCharacteristic' })
  async deleteCharacteristic(@Args('id') id: string) {
    return this.characteristicService.delete(id)
  }

  @Query(() => [CharacteristicsResponse], { name: 'getCharacteristics' })
  async getCharacteristics(@Args('categoryId') id: string) {
    const result = await this.characteristicService.getCharacteristics(id)

    const formattedResult = Object.entries(result).map(([group, data]) => ({
      group,
      data,
    }));

    return formattedResult
  }
  
  @Mutation(() => Boolean, { name: 'updateCharacteristic' })
  async updateCharacteristic(
    @Args('data') data: UpdateCharacteristicMixedInput
  ) {
    return this.characteristicService.updateCharacteristic(data.id, data.input)
  }

}
