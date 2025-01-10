import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '@/src/core/prisma/prisma.service';
import { CreateMessageInputChat } from './dto/create-message.input';
import { Chat } from '@/prisma/generated';
import { ChatModel } from './entities/chat.entity';

@Injectable()
export class ChatService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(id: string, friendId: string, productId: string) {

    if (id === friendId) {
      throw new ConflictException('Нельзя создать чат с самим собой!');
    }

    const existingChat = await this.prismaService.chat.findFirst({
      where: {
        OR: [
            {
              AND: [
                { user_1_id: id },
                { user_2_id: friendId },
              ],
            },
            {
              AND: [
                { user_1_id: friendId },
                { user_2_id: id },
              ],
            },
        ],
      },
  });
  

    if (existingChat) {
      throw new ConflictException('Чат уже есть!');
    }

    await this.prismaService.chat.create({
      data: {
        user_1_id: id,
        user_2_id: friendId,
        productId: productId
      },
    });

    return true;
  }

  public async getChats(userId: string) {
    const chats = await this.prismaService.chat.findMany({
      where: {
        OR: [
          { user_1_id: userId },
          { user_2_id: userId },
        ],
      },
      include: {
        user_1: true,
        user_2: true,
        messages: {
          take: 1,
          orderBy: { sentAt: 'desc' },
        },
      },
    });

    const chatsWithLastMessage = chats.map(chat => ({
      ...chat,
      lastMessage: chat.messages.length > 0 ? chat.messages[0].content : null, 
    }));

    const chatWithAnnouncemntInfo = chatsWithLastMessage.map(chat => ({
      ...chat,
      announcement: this.prismaService.announcement.findUnique({ 
        where: { 
          id: chat.productId 
        } 
      }),
    }));
    
    return chatWithAnnouncemntInfo
  }

  public async getMessages(userId: string, chatId: string) {
    const chat = await this.prismaService.chat.findUnique({
      where: { id: chatId },
    });

    if (!chat || (chat.user_1_id !== userId && chat.user_2_id !== userId)) {
      throw new Error('Access denied');
    }

    return this.prismaService.message.findMany({
      where: { chatId },
      orderBy: { sentAt: 'asc' },
    });
  }

  public async sendMessage(userId: string, input: CreateMessageInputChat) {
    const { chatId, content } = input;

    const chat = await this.prismaService.chat.findUnique({
      where: { id: chatId },
    });

    if (!chat || (chat.user_1_id !== userId && chat.user_2_id !== userId)) {
      throw new Error('Access denied');
    }

    await this.prismaService.message.create({
      data: {
        chatId: chatId,
        senderId: userId,
        content: content,
        status: 0,
        isEdited: false
      },
    });

    return true;
  }

  async remove(id: string) {
    await this.prismaService.chat.delete({
      where: { 
        id 
      },
    });
    
    return true;
  }
}
