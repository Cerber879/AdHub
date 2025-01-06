import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ChatService } from './chat.service';
import { CreateChatInput } from './dto/create-chat.input';

@Resolver()
export class ChatResolver {
  constructor(private readonly chatService: ChatService) {}

  @Mutation(() => Boolean)
  createChat(@Args('createChatInput') createChatInput: CreateChatInput) {
    return this.chatService.create(createChatInput);
  }

  @Mutation(() => Boolean)
  removeChat(@Args('id', { type: () => Int }) id: number) {
    return this.chatService.remove(id);
  }
}
