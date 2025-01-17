import { Field, Float, InputType } from '@nestjs/graphql'
import { IsNotEmpty, MaxLength } from 'class-validator'

@InputType()
export class AddToAnnouncementInput {
  @Field(() => String)
  @IsNotEmpty()
  @MaxLength(100)
  public value: string
}

@InputType()
export class AddToAnnouncementMixedInput {
  @Field(() => String)
  public id: string

  @Field(() => [AddToAnnouncementInput])
  public input: AddToAnnouncementInput[]
}
