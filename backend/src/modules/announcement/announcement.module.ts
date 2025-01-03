import { Module } from '@nestjs/common';
import { AnnouncementService } from './announcement.service';
import { AnnouncementResolver } from './announcement.resolver';

@Module({
  providers: [AnnouncementResolver, AnnouncementService],
})
export class AnnouncementModule {}
