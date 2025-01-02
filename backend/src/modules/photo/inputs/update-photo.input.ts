import { Field, InputType } from "@nestjs/graphql";
import { IsString, MaxLength } from "class-validator";

@InputType()
export class UpdatePhotoInput {
  @Field(() => String, { nullable: true })
  @IsString()
  @MaxLength(50)
  public name?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @MaxLength(15)
  public resolution?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @MaxLength(200)
  public link?: string;
}
