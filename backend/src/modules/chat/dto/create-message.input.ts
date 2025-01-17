import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsString } from 'class-validator'

@InputType()
export class CreateMessageInputChat {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  public chatId: string

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  public content: string
}
