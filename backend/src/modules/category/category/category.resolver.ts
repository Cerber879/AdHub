import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { CreateCategoryInput } from './inputs/create-category.input';
import { UpdateCategoryInput, UpdateCategoryMixedInput } from './inputs/update-category.input';
import { CategoryModel } from './models/category.model';

@Resolver('Category')
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation(() => Boolean, { name: 'createCategory' })
  async createCategory(@Args('data') input: CreateCategoryInput) {
    return this.categoryService.create(input);
  }

  @Query(() => CategoryModel, { name: 'getCategoryById' })
  async findById(@Args('id') id: string) {
    return this.categoryService.findById(id);
  }

  @Query(() => [CategoryModel], { name: 'getSubcategories' })
  async findSubcategories(@Args('id') parentId: string) {
    return this.categoryService.findSubcategories(parentId);
  }

  @Mutation(() => Boolean, { name: 'updateCategory' })
  async updateCategory(
    @Args('data') data: UpdateCategoryMixedInput
  ) {
    return this.categoryService.update(data.id, data.input);
  }

  @Mutation(() => Boolean, { name: 'deleteCategory' })
  async deleteCategory(@Args('id') id: string) {
    return this.categoryService.delete(id);
  }
}
