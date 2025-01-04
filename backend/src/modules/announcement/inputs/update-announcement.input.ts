import { Field, Float, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MaxLength } from "class-validator";

@InputType()
export class UpdateAnnouncementInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  public name?: string;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  @IsPositive()
  public price?: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  public description?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  public status?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  public condition?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  public categoryId?: string;
}

@InputType()
export class UpdateAnnouncementMixedInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  public id: string

  @Field(() => UpdateAnnouncementInput)
  public input: UpdateAnnouncementInput
}