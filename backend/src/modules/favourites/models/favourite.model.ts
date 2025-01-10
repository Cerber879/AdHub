import { Field, ID, ObjectType } from '@nestjs/graphql'

import type { Favourites } from '@/prisma/generated'

@ObjectType()
export class FavouritesModel implements Favourites {
  @Field(() => ID)
  id: string

  @Field(() => String)
  userID: string

  @Field(() => String, { nullable: true })
  announcementID: string
}
