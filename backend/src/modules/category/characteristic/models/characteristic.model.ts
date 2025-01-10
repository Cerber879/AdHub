import { Field, ID, ObjectType } from '@nestjs/graphql'

import type { Characteristic } from '@/prisma/generated'

@ObjectType()
export class CharacteristicModel implements Characteristic {
  @Field(() => ID)
  id: string

  @Field(() => String)
  name: string

  @Field(() => String)
  type: string
  @Field(() => String)
  categoryId: string
}
