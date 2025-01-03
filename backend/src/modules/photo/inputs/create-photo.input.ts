import { Field, InputType } from "@nestjs/graphql";
import { IsString, MaxLength } from "class-validator";

@InputType()
export class CreatePhotoInput {
  @Field(() => String)
  @IsString()
  @MaxLength(50)
  public name: string;

  @Field(() => String)
  @IsString()
  @MaxLength(15)
  public resolution: string;

  @Field(() => String)
  @IsString()
  @MaxLength(200)
  public link: string;

  @Field(() => String)
  @IsString()
  public announcementID: string;
}
