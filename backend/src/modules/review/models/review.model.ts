import { Review } from '@/prisma/generated';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { AnnouncementModel } from '../../announcement/models/announcement.model';
import { UserModel } from '../../auth/account/models/user.model';

@ObjectType()
export class ReviewModel implements Review {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  content: string;

  @Field(() => Number)
  rating: number;
  
  @Field(() => String)
  userId: string;

  @Field(() => String)
  reviewerId: string;

  @Field(() => String)
  announcementId: string;

  @Field(() => AnnouncementModel, { nullable: true })
  announcement: AnnouncementModel

  @Field(() => UserModel, { nullable: true })
  reviewer: UserModel

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
