import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { CreateCategoryInput } from './inputs/create-category.input';
import { UpdateCategoryInput } from './inputs/update-category.input';
import { CategoryModel } from './models/category.model';

@Resolver('Category')
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation(() => CategoryModel)
  async createCategory(@Args('input') input: CreateCategoryInput) {
    return this.categoryService.create(input);
  }

  @Query(() => CategoryModel, { name: 'getCategoryById' })
  async findById(@Args('id') id: string) {
    return this.categoryService.findById(id);
  }

  @Query(() => [CategoryModel], { name: 'getSubcategories' })
  async findSubcategories(@Args('parentId') parentId: string) {
    return this.categoryService.findSubcategories(parentId);
  }

  @Mutation(() => CategoryModel)
  async updateCategory(
    @Args('id') id: string,
    @Args('input') input: UpdateCategoryInput
  ) {
    return this.categoryService.update(id, input);
  }

  @Mutation(() => Boolean)
  async deleteCategory(@Args('id') id: string) {
    return this.categoryService.delete(id);
  }
}
