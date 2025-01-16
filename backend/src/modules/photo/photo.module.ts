import { Module } from '@nestjs/common'

import { PhotoResolver } from './photo.resolver'
import { PhotoService } from './photo.service'

@Module({
  exports: [PhotoService],
  providers: [PhotoResolver, PhotoService]
})
export class PhotoModule {}
