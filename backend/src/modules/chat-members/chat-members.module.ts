import { Module } from '@nestjs/common';
import { ChatMembersService } from './chat-members.service';
import { ChatMembersResolver } from './chat-members.resolver';

@Module({
  providers: [ChatMembersResolver, ChatMembersService],
})
export class ChatMembersModule {}
