import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { AnnouncementCharacteristicService } from './announcement-characteristic.service';
import { UpdateAnnouncementCharacteristicMixedInput} from './inputs/update-announcement-characteristic.input';
import { AnnouncementCharacteristicModel } from './models/announcement-characteristic.model';
import { AddToAnnouncementMixedInput } from './inputs/add-to-announcement.input';
@Resolver()
export class AnnouncementCharacteristicResolver {
  constructor(private readonly announcementCharacteristicService: AnnouncementCharacteristicService) {}

  @Mutation(() => Boolean, { name: 'updateAnnouncementCharacteristic' })
  async updateAnnouncementCharacteristic(@Args('data') data: UpdateAnnouncementCharacteristicMixedInput) {
    return this.announcementCharacteristicService.updateById(data.id, data.input);
  }
  @Mutation(() => Boolean, { name: 'deleteAnnouncementCharacteristic' })
  async deleteAnnouncementCharacteristic(@Args('id') id: string) {
    return this.announcementCharacteristicService.deleteById(id);
  }
  @Mutation(() => Boolean, { name: 'addAnnouncementCharacteristic' })
  async addAnnouncementCharacteristic(@Args('data') data: AddToAnnouncementMixedInput) {
    return this.announcementCharacteristicService.addToAnnouncement(data.id, data.input);
  }
  @Query(() => [AnnouncementCharacteristicModel], { name: 'getAnnouncementCharacteristics' })
  async getAnnouncementCharacteristics(@Args('id') id: string) {
    return this.announcementCharacteristicService.getByAnnouncementId(id);
  }
}
