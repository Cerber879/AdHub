import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'

@InputType()
export class UpdateCharacteristicInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  public name?: string

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public type?: string

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsNotEmpty()
  public group?: string

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsNotEmpty()
  public unitSuffix?: string

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public categoryId?: string
}

@InputType()
export class UpdateCharacteristicMixedInput {
  @Field(() => String)
  public id: string

  @Field(() => UpdateCharacteristicInput)
  public input: UpdateCharacteristicInput
}
