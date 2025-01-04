import type { Category } from "@/prisma/generated";
import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class CategoryModel implements Category {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  parentId: string;
}
