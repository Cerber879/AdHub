import { Field, InputType } from "@nestjs/graphql";
import { IsString, IsOptional, MaxLength } from "class-validator";

@InputType()
export class CreateCategoryInput {
  @Field(() => String)
  @IsString()
  @MaxLength(100)
  public name: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  public parentId?: string; 
}
