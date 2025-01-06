import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CharacteristicService } from './characteristic.service';
import { CreateCharacteristicInput } from './inputs/create-characteristic.input';

@Resolver()
export class CharacteristicResolver {
  constructor(private readonly characteristicService: CharacteristicService) {}
  @Mutation(() => Boolean, {name: 'createCharacteristic'})
  async createCategory(@Args('data') input: CreateCharacteristicInput) {
    return this.characteristicService.create(input);
  }
  
}
