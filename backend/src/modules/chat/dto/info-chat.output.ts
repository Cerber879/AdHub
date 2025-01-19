import { Field, Float, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class ChatAnnouncementResponse {
  @Field(() => String)
  public name: string

  @Field(() => Float)
  public price: number

  @Field(() => String)
  public description: string
}
@ObjectType()
export class ChatUserResponse {
  @Field(() => ID)
  public id: string
  
  @Field(() => String, { nullable: true })
  public avatar: string

  @Field(() => String)
  public displayName: string
}

@ObjectType()
export class ChatPhotoResponse {
  @Field(() => String, { nullable: true })
  public link: string
}

@ObjectType()
export class ChatInfoOutput {
  @Field(() => ID)
  id: string

  @Field(() => ChatUserResponse)
  public user_1: ChatUserResponse

  @Field(() => ChatUserResponse)
  public user_2: ChatUserResponse

  @Field(() => ChatAnnouncementResponse, { nullable: true })
  public announcement: ChatAnnouncementResponse

  @Field(() => ChatPhotoResponse, { nullable: true })
  public mainPhoto: ChatPhotoResponse

  @Field(() => String, { nullable: true })
  public lastMessage: string

  @Field(() => Date)
  public createdAt: Date
}
