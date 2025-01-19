import { Module } from '@nestjs/common'

import { CategoryResolver } from './category.resolver'
import { CategoryService } from './category.service'

@Module({
  exports: [CategoryService],
  providers: [CategoryResolver, CategoryService]
})
export class CategoryModule {}
