import { ObjectType, Field } from '@nestjs/graphql';
import { CharacteristicModel } from '../models/characteristic.model';

@ObjectType()
export class CharacteristicsResponse {
  @Field(() => [CharacteristicGroup])
  characteristics: CharacteristicGroup[];
}

@ObjectType()
export class CharacteristicGroup {
  @Field()
  group: string;

  @Field(() => [CharacteristicModel])
  items: CharacteristicModel[];
}
