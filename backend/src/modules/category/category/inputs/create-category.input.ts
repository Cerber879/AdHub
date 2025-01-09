import { Field, InputType } from '@nestjs/graphql'
import { IsOptional, IsString, MaxLength } from 'class-validator'

@InputType()
export class CreateCategoryInput {
  @Field(() => String)
  @IsString()
  @MaxLength(100)
  public name: string

  @Field(() => String, { nullable: true })
  @IsOptional()
  public parentId?: string
}
