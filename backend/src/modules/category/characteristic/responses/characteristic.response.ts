import { Field, ObjectType } from '@nestjs/graphql'

import { CharacteristicModel } from '../models/characteristic.model'

@ObjectType()
export class CharacteristicsResponse {
  @Field(() => String)
  group: string

  @Field(() => [CharacteristicModel])
  data: CharacteristicModel[]
}
