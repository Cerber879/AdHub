import { Module } from '@nestjs/common'

import { AnnouncementResolver } from './announcement.resolver'
import { AnnouncementService } from './announcement.service'
import { PhotoModule } from '../photo/photo.module'
import { AnnouncementCharacteristicModule } from '../category/announcement-characteristic/announcement-characteristic.module'

@Module({
  imports: [PhotoModule, AnnouncementCharacteristicModule],
  exports: [AnnouncementService],
  providers: [AnnouncementResolver, AnnouncementService]
})
export class AnnouncementModule {}
