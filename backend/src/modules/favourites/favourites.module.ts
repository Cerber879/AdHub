import { Module } from '@nestjs/common'

import { AnnouncementModule } from '../announcement/announcement.module'

import { FavouritesResolver } from './favourites.resolver'
import { FavouritesService } from './favourites.service'

@Module({
  imports: [AnnouncementModule],
  providers: [FavouritesResolver, FavouritesService]
})
export class FavouritesModule {}
