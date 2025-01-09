import { Field, Float, ID, ObjectType } from '@nestjs/graphql'

import { $Enums, Announcement } from '@/prisma/generated'
import {
  AnnouncementStatus,
  ProductCondition
} from '@/src/shared/types/announcement-types'

@ObjectType()
export class AnnouncementModel implements Announcement {
  @Field(() => ID)
  public id: string

  @Field(() => String)
  public name: string

  @Field(() => Float)
  public price: number

  @Field(() => String)
  public description: string

  @Field(() => Date)
  public placementDate: Date

  @Field(() => AnnouncementStatus)
  public status: $Enums.AnnouncementStatus

  @Field(() => ProductCondition)
  public condition: $Enums.ProductCondition

  @Field(() => String)
  public userId: string

  @Field(() => String)
  public categoryId: string

  @Field(() => [String], { nullable: true })
  public photo?: string[]

  @Field(() => [String], { nullable: true })
  public review?: string[]

  @Field(() => [String], { nullable: true })
  public favourites?: string[]

  @Field(() => [String], { nullable: true })
  public announcementCharacteristic?: string[]
}
