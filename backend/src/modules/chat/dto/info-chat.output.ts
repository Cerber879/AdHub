import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserModel } from '../../auth/account/models/user.model';
import { AnnouncementModel } from '../../announcement/models/announcement.model';

@ObjectType()
export class ChatInfoOutput {
  @Field(() => ID)
  id: string
  
  @Field(() => UserModel)
  public user_1: UserModel

  @Field(() => UserModel)
  public user_2: UserModel
  
  @Field(() => AnnouncementModel, { nullable: true })
  public announcement: AnnouncementModel;

  @Field(() => String, { nullable: true })
  public lastMessage: string

  @Field(() => Date)
  public createdAt: Date;
}