import { Field, Float, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MaxLength } from "class-validator";

@InputType()
export class CreateAnnouncementInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  public name: string;

  @Field(() => Float)
  @IsNumber()
  @IsPositive()
  public price: number;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  public description: string;

  @Field(() => Date)
  public placementDate: Date;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public status: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public condition: string;

  @Field(() => Number)
  @IsNumber()
  @IsPositive()
  public categoryId: string
}