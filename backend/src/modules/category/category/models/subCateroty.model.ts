import { Field, ID, ObjectType } from '@nestjs/graphql'

import type { Category } from '@/prisma/generated'

import { CategoryModel } from './category.model'

@ObjectType()
export class SubCutegoryModel {
  @Field(() => ID)
  id: string

  @Field(() => String)
  name: string

  @Field(() => [CategoryModel], { nullable: true })
  subcategories?: CategoryModel[]
}
