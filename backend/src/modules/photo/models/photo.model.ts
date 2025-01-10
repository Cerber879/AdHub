import { Field, ID, ObjectType } from '@nestjs/graphql'

import { Photo } from '@/prisma/generated'

@ObjectType()
export class PhotoModel implements Photo {
  @Field(() => ID)
  id: string

  @Field(() => String)
  link: string

  @Field(() => String)
  announcementID: string
}
