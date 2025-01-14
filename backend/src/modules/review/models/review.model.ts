import { Review } from '@/prisma/generated';
import { ObjectType, Field } from '@nestjs/graphql';
import { AnnouncementModel } from '../../announcement/models/announcement.model';
import { UserModel } from '../../auth/account/models/user.model';

@ObjectType()
export class ReviewModel implements Review {
  @Field()
  id: string;

  @Field()
  content: string;

  @Field()
  rating: number;
  
  @Field()
  userId: string;

  @Field()
  reviewerId: string;

  @Field()
  announcementId: string;

  @Field()
  announcement: AnnouncementModel

  @Field()
  reviewer: UserModel

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
