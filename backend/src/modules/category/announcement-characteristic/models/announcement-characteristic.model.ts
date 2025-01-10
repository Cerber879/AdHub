import { Field, ID, ObjectType } from '@nestjs/graphql'

import type { AnnouncementCharacteristic } from '@/prisma/generated'

@ObjectType()
export class AnnouncementCharacteristicModel
  implements AnnouncementCharacteristic
{
  @Field(() => ID)
  id: string

  @Field(() => String)
  value: string
  @Field(() => String)
  productId: string
  @Field(() => String)
  characteristicId: string
}
