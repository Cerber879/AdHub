import { Field, InputType } from '@nestjs/graphql'
import { IsString, MaxLength } from 'class-validator'

@InputType()
export class CreatePhotoInput {
  @Field(() => String)
  @IsString()
  public link: string

  @Field(() => String)
  @IsString()
  public announcementID: string
}
