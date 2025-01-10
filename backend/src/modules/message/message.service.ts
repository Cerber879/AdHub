import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMessageInput } from './dto/create-message.input';
import { PrismaService } from '@/src/core/prisma/prisma.service';

@Injectable()
export class MessageService {

  constructor(private readonly prismaService: PrismaService) {}
  
  async create(createMessageInput: CreateMessageInput) {
    const { Content, status, userID, chatID } = createMessageInput;

    await this.prismaService.message.create({
      data: 
      {
        content: Content,
        status: status,
        isEdited: false,
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

  public async editMessage(messageId: string, newContent: string) {
    return this.prismaService.message.update({
      where: {
        id: messageId,
      },
      data: {
        content: newContent,
        isEdited: true,
        sentAt: new Date(),
      },
    });
  }


  async findMessage(search: string, chatId: string) {
    const message = await this.prismaService.message.findMany({ 
      where : {
        AND: [
          chatId ? { chatId: chatId } : {},
          search !== null && search !== '' ? 
          {
            content: {
              contains: search,
              mode: 'insensitive'
            }
          } : {},
        ]
    }});

    if (!message) {
      throw new NotFoundException('Сообщение не найдено');
    }

    return message;
  }

  async update(id: string, content: string) {

    if (!content || content === '') {
      throw new ConflictException('Сообщение не может быть пустым')
    }

    await this.prismaService.message.update({ 
      where: {
        id
      },
      data: {
        isEdited: true,
        content: content
      }
    });

    return true;
  }

  async remove(id: string) {
    const message = await this.prismaService.message.delete({ 
      where: {
        id
      }
    });

    if (!message) {
      throw new NotFoundException('Сообщение не найдено');
    }

    return true;
  }
}

