import { CreateChatMemberInput } from './create-chat-member.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateChatMemberInput extends PartialType(CreateChatMemberInput) {
  @Field(() => Int)
  id: number;
}
