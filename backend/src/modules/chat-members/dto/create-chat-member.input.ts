import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateChatMemberInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public chatID: string;
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public userID: string;
}
