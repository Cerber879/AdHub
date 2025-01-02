import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/src/core/prisma/prisma.service';
import { CreateCategoryInput } from './inputs/create-category.input';
import { UpdateCategoryInput } from './inputs/update-category.input';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(input: CreateCategoryInput) {
    return this.prisma.category.create({
      data: {
        name: input.name,
        parent: input.parentId ? {
             connect: { 
                id: input.parentId 
            } 
        } : null,
      },
    });
  }

  async findById(id: string) {
    return this.prisma.category.findUnique({
      where: {
        id 
      },
    });
  }

  async findSubcategories(parentId: string) {
    return this.prisma.category.findMany({
      where: {
        parentId: parentId
    },
    });
  }

  async update(id: string, input: UpdateCategoryInput) {
    return this.prisma.category.update({
      where: { 
        id 
      },
      data: input,
    });
  }

  async delete(id: string) {
    await this.prisma.category.delete({
      where: {
        id 
      },
    });
    return true;
  }
}
