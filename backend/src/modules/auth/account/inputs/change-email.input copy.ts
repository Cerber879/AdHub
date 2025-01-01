import { Field, InputType } from '@nestjs/graphql'
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator'

@InputType()
export class ChangePhoneNumberInput {
	@Field(() => String)
	@IsString()
	@IsNotEmpty()
	@IsPhoneNumber('RU')
	public phoneNumber: string
}
