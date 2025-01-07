import type { Favourites } from "@/prisma/generated";
import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class FavouritesModel implements Favourites {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  userID: string;

  @Field(() => String, { nullable: true })
  announcementID: string;

}
