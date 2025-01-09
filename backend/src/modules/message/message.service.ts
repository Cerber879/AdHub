import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMessageInput } from './dto/create-message.input';
import { PrismaService } from '@/src/core/prisma/prisma.service';

@Injectable()
export class MessageService {

  constructor(private readonly prismaService: PrismaService) {}
  
  async create(createMessageInput: CreateMessageInput) {
    const { Content, status, Date, userID, chatID } = createMessageInput;
    await this.prismaService.message.create({
      data: 
      {
        Content: Content,
        Status: status,
        Date: Date,
        chat: {
          connect:{
            id: chatID
          }
        },
        user: {
          connect: {
            id: userID
          }
        },
      }
    });

    return true
  }

  async findOne(id: string) {
    const messagef = await this.prismaService.message.findUnique({ where : {id}});

    if (!messagef) {
      throw new NotFoundException('Сообщение не найдено');
    }

    return messagef;
  }

  async remove(id: string) {
    const messagef = await this.prismaService.message.delete({ where : {id}});

    if (!messagef) {
      throw new NotFoundException('Сообщение не найдено');
    }

    return true;
  }
}

