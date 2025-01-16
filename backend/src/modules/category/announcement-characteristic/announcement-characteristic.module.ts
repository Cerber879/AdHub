import { Module } from '@nestjs/common'

import { AnnouncementCharacteristicResolver } from './announcement-characteristic.resolver'
import { AnnouncementCharacteristicService } from './announcement-characteristic.service'

@Module({
  exports: [AnnouncementCharacteristicService],
  providers: [
    AnnouncementCharacteristicResolver,
    AnnouncementCharacteristicService
  ]
})
export class AnnouncementCharacteristicModule {}
