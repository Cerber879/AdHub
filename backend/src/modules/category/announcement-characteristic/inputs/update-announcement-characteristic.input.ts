import { Field, Float, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MaxLength } from "class-validator";

@InputType()
export class UpdateAnnouncementCharacteristicInput {
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
export class UpdateAnnouncementCharacteristicMixedInput {
  @Field(() => String)
  public id: string;

  @Field(() => UpdateAnnouncementCharacteristicInput)
  public input: UpdateAnnouncementCharacteristicInput
}