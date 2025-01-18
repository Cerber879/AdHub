import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

@InputType()
export class ChangePhoneNumberInput {
  @Field(() => String)
  @IsString({ message: 'Номер телефона должен быть строкой' })
  @IsNotEmpty({ message: 'Номер телефона не должен быть пустым' })
  @IsPhoneNumber('RU', { message: 'Введите корректный номер телефона в формате РФ' })
  public phoneNumber: string;
}
