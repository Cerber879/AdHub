import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'

@InputType()
export class CreateCharacteristicInput {
  @Field(() => String)
  @IsString()
  @MaxLength(100)
  public name: string

  @Field(() => String)
  @IsNotEmpty()
  public type: string
  
  @Field(() => String)
  @IsNotEmpty()
  public group: string

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsNotEmpty()
  public unitSuffix?: string

  @Field(() => String)
  @IsString()
  public categoryId: string
}
