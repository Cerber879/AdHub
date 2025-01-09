import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/src/core/prisma/prisma.service';

@Injectable()
export class ChatService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(){
    // ??? const { messages, chatMembers } = createChatInput;
    await this.prismaService.chat.create({
      data: 
      {},
    });

    return true;
  }

  remove(id: string) {
    this.prismaService.chat.delete({
      where: { id },
    });
    
    return true;
  }
}
