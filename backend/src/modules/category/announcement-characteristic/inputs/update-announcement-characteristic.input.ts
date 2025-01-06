import { Field, Float, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MaxLength } from "class-validator";

@InputType()
export class UpdateAnnouncementInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @MaxLength(100)
  public value: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  public characteristicId: string
}

@InputType()
export class UpdateAnnouncementMixedInput {
  @Field(() => String)
  public id: string;

  @Field(() => String)
  public input: UpdateAnnouncementInput
}