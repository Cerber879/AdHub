import { Injectable } from '@nestjs/common';
import { CreateChatMemberInput } from './dto/create-chat-member.input';
import { PrismaService } from '@/src/core/prisma/prisma.service';
import { ChatMemberModel } from './entities/chat-member.entity';

@Injectable()
export class ChatMembersService {
  constructor(private readonly prismaService: PrismaService) {}
  
  async create(createChatMemberInput: CreateChatMemberInput): Promise<boolean> {
    const { chatID, userID } = createChatMemberInput;
    await this.prismaService.chatMembers.create({
      data: {
        chat: {
          connect: {
            id: chatID,
          },
        },
        user: {
          connect: {
            id: userID,
          },
        },
      },
    });
    return true;
  }

  async findAllByUserId(userID: string): Promise<ChatMemberModel[]> {
    return this.prismaService.chatMembers.findMany({
      where: {
        userID,
      },
    });
  }

  async findAllByChatId(chatID: string): Promise<ChatMemberModel[]> {
    return this.prismaService.chatMembers.findMany({
      where: {
        chatID,
      },
    });
  }

}
