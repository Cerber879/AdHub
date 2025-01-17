import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class CharacteristicsValuesResponse {
  @Field(() => [CharacteristicDataGroup])
  characteristics: CharacteristicDataGroup[]
}

@ObjectType()
class CharacteristicDataGroup {
  @Field(() => String)
  group: string

  @Field(() => [AnnouncementCharacteristicResponse])
  data: AnnouncementCharacteristicResponse[]
}

@ObjectType()
export class AnnouncementCharacteristicResponse {
  @Field(() => String)
  value: string

  @Field(() => String)
  characteristic: string

  @Field(() => String, { nullable: true })
  unitSuffix?: string

  @Field(() => String)
  type: string
}
