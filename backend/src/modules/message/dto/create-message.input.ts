import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateMessageInput
{
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public Content: string;

  @Field(() => Int)
  public status: number;

  @Field(() => String)
  public userID: string;

  @Field(() => String)
  public chatID: string;
}
