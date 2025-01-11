import { Review } from '@/prisma/generated';
import { ObjectType, Field } from '@nestjs/graphql';
import { AnnouncementModel } from '../../announcement/models/announcement.model';

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
  announcementId: string;

  @Field()
  announcement: AnnouncementModel

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
