import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateChatMemberInput {
  @Field(() => String)
  public id: string;
  @Field(() => String)
  public chatID: string;
  @Field(() => String)
  public userID: string;
}
