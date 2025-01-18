import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class ChangeEmailInput {
  @Field(() => String)
  @IsString({ message: 'Email должен быть строкой' })
  @IsNotEmpty({ message: 'Email не должен быть пустым' })
  @IsEmail({}, { message: 'Указан некорректный email' })
  public email: string;
}
