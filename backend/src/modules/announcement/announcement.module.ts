import { Module } from '@nestjs/common'

import { AnnouncementCharacteristicModule } from '../category/announcement-characteristic/announcement-characteristic.module'
import { PhotoModule } from '../photo/photo.module'
import { CategoryModule } from '../category/category/category.module'

import { AnnouncementResolver } from './announcement.resolver'
import { AnnouncementService } from './announcement.service'

@Module({
  imports: [PhotoModule, AnnouncementCharacteristicModule, CategoryModule],
  exports: [AnnouncementService],
  providers: [AnnouncementResolver, AnnouncementService]
})
export class AnnouncementModule {}
