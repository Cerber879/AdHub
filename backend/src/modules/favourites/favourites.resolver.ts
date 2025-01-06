import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FavouritesService } from './favourites.service';



import { Authorization } from '@/src/shared/decorators/auth.decorator';
import { Authorized } from '@/src/shared/decorators/authorized.decorator';
import { User } from '@/prisma/generated';
import { AddFavouriteInput } from './inputs/add-favourite.input';


@Resolver()
export class FavouritesResolver {
  constructor(private readonly favouritesService: FavouritesService) {}
  @Authorization()
  @Mutation(() => Boolean, { name: 'addFavourite' })
    async addFavourite(
      @Authorized() user: User,
      @Args('data') input: AddFavouriteInput
    ) {
      return this.favouritesService.add(input, user);
    }
}
