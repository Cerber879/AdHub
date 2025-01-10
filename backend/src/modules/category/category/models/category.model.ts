import { Field, ID, ObjectType } from '@nestjs/graphql'

import type { Category } from '@/prisma/generated'

@ObjectType()
export class CategoryModel implements Category {
  @Field(() => ID)
  id: string

  @Field(() => String)
  name: string

  @Field(() => String, { nullable: true })
  parentId: string
}
