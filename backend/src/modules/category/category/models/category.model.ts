import type { Category } from "@/prisma/generated";
import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class CategoryModel implements Category {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  parentId: string;
}
