import { InputType, Int, Field } from '@nestjs/graphql';
import { MessageModel } from '../../message/entities/message.entity';
import { ChatMemberModel } from '../../chat-members/entities/chat-member.entity'

@InputType()
export class CreateChatInput {
  @Field(() => [MessageModel])
  messages: MessageModel[]; 

  @Field(() => [ChatMemberModel])
  chatMembers: ChatMemberModel[];
}
