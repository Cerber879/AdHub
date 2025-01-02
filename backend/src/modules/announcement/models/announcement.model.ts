import { Field, Float, ID, ObjectType, InputType } from '@nestjs/graphql';
import type { Announcement, AnnouncementStatus, ProductCondition } from '@/prisma/generated';

@ObjectType()
export class AnnouncementModel implements Announcement {
  @Field(() => ID)
  public id: string;

  @Field(() => String)
  public name: string;

  @Field(() => Float)
  public price: number;

  @Field(() => String)
  public description: string;

  @Field(() => Date)
  public placementDate: Date;

  @Field(() => String)
  public status: AnnouncementStatus;

  @Field(() => String)
  public condition: ProductCondition;

  @Field(() => String)
  public userId: string;

  @Field(() => Number)
  public categoryId: string;

  @Field(() => [String], { nullable: true })
  public photo?: string[];

  @Field(() => [String], { nullable: true })
  public review?: string[];

  @Field(() => [String], { nullable: true })
  public favourites?: string[];

  @Field(() => [String], { nullable: true })
  public announcementCharacteristic?: string[];

  @Field(() => Date)
  public createdAt: Date;

  @Field(() => Date)
  public updatedAt: Date;
}