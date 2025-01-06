import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ChatMembersService } from './chat-members.service';
import { ChatMemberModel } from './entities/chat-member.entity';
import { CreateChatMemberInput } from './dto/create-chat-member.input';
import { UpdateChatMemberInput } from './dto/update-chat-member.input';
// 8. **ChatMembers**
//    ++ **Add Member** - Добавить участников в чат.
//    ++ **Get Chats By User ID** - Получить список чатов юзера.
//    ++ **Get Members By Chat ID[]** - Получить список участников чата.
@Resolver()
export class ChatMembersResolver {
  constructor(private readonly chatMembersService: ChatMembersService) {}

  @Mutation(() => Boolean)
  AddMember(@Args('createChatMemberInput') createChatMemberInput: CreateChatMemberInput) {
    return this.chatMembersService.create(createChatMemberInput);
  }

  @Query(() => [ChatMemberModel], { name: 'chatMembers' })
  GetChatsByUserID() {
    return this.chatMembersService.findAll();
  }

  @Query(() => [ChatMemberModel], { name: 'chatMember' })
  GetMembersByChatID(@Args('id', { type: () => Int }) id: number) {
    return this.chatMembersService.findOne(id);
  }
}