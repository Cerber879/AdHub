import { Photo } from "@/prisma/generated";
import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class PhotoModel implements Photo {
  @Field(() => ID)
  id: string

  @Field()
  name: string

  @Field()
  resolution: string

  @Field()
  link: string

  @Field(() => String)
  announcementID: string
}
