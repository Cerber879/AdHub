import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

@InputType()
export class ChangePasswordInput {
  @Field(() => String)
  @IsString({ message: 'Старый пароль должен быть строкой' })
  @IsNotEmpty({ message: 'Старый пароль не должен быть пустым' })
  @MinLength(8, { message: 'Старый пароль должен содержать минимум 8 символов' })
  public oldPassword: string;

  @Field(() => String)
  @IsString({ message: 'Новый пароль должен быть строкой' })
  @IsNotEmpty({ message: 'Новый пароль не должен быть пустым' })
  @MinLength(8, { message: 'Новый пароль должен содержать минимум 8 символов' })
  public newPassword: string;
}
