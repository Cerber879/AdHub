import { Field, Float, InputType } from '@nestjs/graphql'
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength
} from 'class-validator'

@InputType()
export class AddToAnnouncementInput {
  @Field(() => String)
  @IsNotEmpty()
  @MaxLength(100)
  public value: string

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public characteristicId: string
}

@InputType()
export class AddToAnnouncementMixedInput {
  @Field(() => String)
  public id: string

  @Field(() => AddToAnnouncementInput)
  public input: AddToAnnouncementInput
}
