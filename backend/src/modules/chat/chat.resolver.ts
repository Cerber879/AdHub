import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ChatService } from './chat.service';
//import { CreateChatInput } from './dto/create-chat.input';

@Resolver()
export class ChatResolver {
  constructor(private readonly chatService: ChatService) {}

  @Mutation(() => Boolean)
  async createChat() : Promise<boolean> {
    return this.chatService.create();
  }

  @Mutation(() => Boolean)
  async removeChat(@Args('id', { type: () => String }) id: string) : Promise<boolean> {
    return this.chatService.remove(id);
  }
}
