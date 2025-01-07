import { Field, Float, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsPositive, IsString, MaxLength } from "class-validator";

@InputType()
export class AddFavouriteInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public announcementID: string
}