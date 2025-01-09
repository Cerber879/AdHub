import { Module } from '@nestjs/common'

import { CharacteristicResolver } from './characteristic.resolver'
import { CharacteristicService } from './characteristic.service'

@Module({
  providers: [CharacteristicResolver, CharacteristicService]
})
export class CharacteristicModule {}
