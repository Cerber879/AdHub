import { Module } from '@nestjs/common';
import { AnnouncementCharacteristicService } from './announcement-characteristic.service';
import { AnnouncementCharacteristicResolver } from './announcement-characteristic.resolver';

@Module({
  providers: [AnnouncementCharacteristicResolver, AnnouncementCharacteristicService],
})
export class AnnouncementCharacteristicModule {}
