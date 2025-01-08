import { Module } from '@nestjs/common';
import { FavouritesService } from './favourites.service';
import { FavouritesResolver } from './favourites.resolver';
import { AnnouncementModule } from '../announcement/announcement.module';

@Module({
  imports: [AnnouncementModule],
  providers: [FavouritesResolver, FavouritesService],
})
export class FavouritesModule {}
