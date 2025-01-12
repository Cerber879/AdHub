import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { AnnouncementCharacteristicService } from './announcement-characteristic.service'
import { AddToAnnouncementMixedInput } from './inputs/add-to-announcement.input'
import { UpdateAnnouncementCharacteristicMixedInput } from './inputs/update-announcement-characteristic.input'
import { CharacteristicsResponse } from './responses/announcement.response'

@Resolver()
export class AnnouncementCharacteristicResolver {
  constructor(
    private readonly announcementCharacteristicService: AnnouncementCharacteristicService
  ) {}

  @Mutation(() => Boolean, { name: 'updateAnnouncementCharacteristic' })
  async updateAnnouncementCharacteristic(
    @Args('data') data: UpdateAnnouncementCharacteristicMixedInput
  ) {
    return this.announcementCharacteristicService.updateById(
      data.id,
      data.input
    )
  }
  @Mutation(() => Boolean, { name: 'deleteAnnouncementCharacteristic' })
  async deleteAnnouncementCharacteristic(@Args('id') id: string) {
    return this.announcementCharacteristicService.deleteById(id)
  }
  @Mutation(() => Boolean, { name: 'addAnnouncementCharacteristic' })
  async addAnnouncementCharacteristic(
    @Args('data') data: AddToAnnouncementMixedInput
  ) {
    return this.announcementCharacteristicService.addToAnnouncement(
      data.id,
      data.input
    )
  }
  @Query(() => CharacteristicsResponse, {
    name: 'getAnnouncementCharacteristics'
  })
  async getAnnouncementCharacteristics(@Args('id') id: string) {
    const result = await  this.announcementCharacteristicService.getByAnnouncementId(id)
    const formattedResult = Object.entries(result).map(([group, data]) => ({
      group,
      data,
    }));

    return { characteristics: formattedResult };
  }
}
