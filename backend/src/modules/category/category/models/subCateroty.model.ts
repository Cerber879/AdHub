import type { Category } from "@/prisma/generated";
import { ObjectType, Field, ID } from "@nestjs/graphql";
import { CategoryModel } from "./category.model";

@ObjectType()
export class SubCutegoryModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => [CategoryModel], { nullable: true })
  subcategories?: CategoryModel[];
}
