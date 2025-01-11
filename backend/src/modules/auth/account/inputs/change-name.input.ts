import { Field, InputType } from '@nestjs/graphql'
import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator'

@InputType()
export class ChangeProfileInfoInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  public displayName: string

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  public bio: string
}
