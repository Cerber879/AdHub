import { Field, ID, ObjectType } from '@nestjs/graphql'

import { Chat, Message } from '@/prisma/generated'

@ObjectType()
export class ChatModel implements Chat {
  @Field(() => ID)
  public id: string

  @Field(() => String)
  public user_1_id: string

  @Field(() => String)
  public user_2_id: string

  @Field(() => String)
  public productId: string

  @Field(() => Date)
  public createdAt: Date
}
