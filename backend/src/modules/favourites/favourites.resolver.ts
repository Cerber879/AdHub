import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FavouritesService } from './favourites.service';



import { Authorization } from '@/src/shared/decorators/auth.decorator';
import { Authorized } from '@/src/shared/decorators/authorized.decorator';
import { User } from '@/prisma/generated';
import { AddFavouriteInput } from './inputs/add-favourite.input';
import { FavouritesModel } from './models/favourite.model';
import { AnnouncementService } from '../announcement/announcement.service';
import { AnnouncementModel } from '../announcement/models/announcement.model';


@Resolver()
export class FavouritesResolver {
  constructor(
    private readonly favouritesService: FavouritesService, 
    private readonly annoncementService: AnnouncementService
  ) {}

  @Authorization()
  @Mutation(() => Boolean, { name: 'addFavourite' })
    async addFavourite(
      @Authorized() user: User,
      @Args('data') input: AddFavouriteInput
    ) {
      return this.favouritesService.add(input, user);
    }
  @Authorization()
  @Mutation(() => Boolean, { name: 'removeFavourite' })
  async removeFavourite(
    @Args('id') id: string,
    @Authorized() user: User
  ) {
    return this.favouritesService.delete(id, user);
  }

  @Authorization()
  @Query(() => [AnnouncementModel], { name: 'getFavouritesByUserId' })
  async getFavouritesByUserId(@Authorized() user: User) {
    const favourites = await this.favouritesService.getFavouritesByUserId(user.id);
    const announcementIds = favourites.map(fav => fav.announcementID);
    return this.annoncementService.findByIds(announcementIds);
  }

  @Authorization()
  @Query(() => Boolean, { name: 'checkAnnouncementInFavourites' })
  async checkAnnouncementInFavourites(
    @Authorized() user: User, 
    @Args('adId') adId: string) 
  {
    return this.favouritesService.checkAnnouncementInFavourites(user.id, adId);
  }
}
