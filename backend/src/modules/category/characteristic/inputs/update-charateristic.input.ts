import { Field, InputType } from '@nestjs/graphql'
import { IsOptional, IsString, MaxLength } from 'class-validator'

@InputType()
export class UpdateCharacteristicInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  public name?: string

  @Field(() => String, { nullable: true })
  @IsOptional()
  public type?: string

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  public categoryId?: string
}

@InputType()
export class UpdateCharacteristicMixedInput {
  @Field(() => String)
  public id: string

  @Field(() => UpdateCharacteristicInput)
  public input: UpdateCharacteristicInput
}
