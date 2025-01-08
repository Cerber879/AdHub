import { Field, InputType } from '@nestjs/graphql'
import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

@InputType()
export class ChangeDisplayNameInput {
	@Field(() => String)
	@IsString()
	@IsNotEmpty()
	@IsEmail()
	public displayName: string
}
