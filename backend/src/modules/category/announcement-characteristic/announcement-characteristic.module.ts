import { Module } from '@nestjs/common'

import { AnnouncementCharacteristicResolver } from './announcement-characteristic.resolver'
import { AnnouncementCharacteristicService } from './announcement-characteristic.service'

@Module({
  providers: [
    AnnouncementCharacteristicResolver,
    AnnouncementCharacteristicService
  ]
})
export class AnnouncementCharacteristicModule {}
