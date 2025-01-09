import { Field, InputType } from '@nestjs/graphql'
import { IsString, MaxLength } from 'class-validator'

@InputType()
export class UpdatePhotoInput {
  @Field(() => String, { nullable: true })
  @IsString()
  public link?: string
}
