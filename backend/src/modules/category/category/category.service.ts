import { ConflictException, Injectable } from '@nestjs/common'

import { PrismaService } from '@/src/core/prisma/prisma.service'

import { CreateCategoryInput } from './inputs/create-category.input'
import { UpdateCategoryInput } from './inputs/update-category.input'
import { CategoryModel } from './models/category.model'

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(input: CreateCategoryInput) {
    const { name, parentId } = input

    const existingCategory = await this.prismaService.category.findFirst({
      where: {
        name
      }
    })

    if (existingCategory) {
      throw new ConflictException('Такая категория уже существует')
    }

    await this.prismaService.category.create({
      data: {
        name,
        parentId: parentId || null
      }
    })

    return true
  }

  async getMainCategories() {
    return this.prismaService.category.findMany({
      where: {
        parentId: null
      }
    })
  }

  async findById(id: string) {
    return this.prismaService.category.findUnique({
      where: {
        id
      }
    })
  }

  async findSubcategories(parentId: string) {
    return this.prismaService.category.findMany({
      where: {
        parentId: parentId
      }
    })
  }

  async findParentCategories(id: string) {
    const parents: CategoryModel[] = []

    let currentCategory = await this.prismaService.category.findUnique({
      where: { id },
      include: { parent: true }
    })

    if (!currentCategory || !currentCategory.id || !currentCategory.name) {
      throw new Error('Category or category.id is null or undefined')
    }

    parents.push(currentCategory)

    while (currentCategory?.parent) {
      parents.push(currentCategory.parent)

      currentCategory = await this.prismaService.category.findUnique({
        where: { id: currentCategory.parent.id },
        include: { parent: true }
      })

      if (!currentCategory || !currentCategory.id || !currentCategory.name) {
        throw new Error('Category or category.id is null or undefined')
      }
    }

    return parents.reverse()
  }

  async update(id: string, input: UpdateCategoryInput) {
    await this.prismaService.category.update({
      where: {
        id
      },
      data: input
    })

    return true
  }

  async delete(id: string) {
    await this.prismaService.category.delete({
      where: {
        id
      }
    })

    return true
  }
}
