import { Module } from '@nestjs/common';
import { CharacteristicService } from './characteristic.service';
import { CharacteristicResolver } from './characteristic.resolver';

@Module({
  providers: [CharacteristicResolver, CharacteristicService],
})
export class CharacteristicModule {}
