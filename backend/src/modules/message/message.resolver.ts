import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MessageService } from './message.service';
import { MessageModel } from './entities/message.entity';
import { CreateMessageInput } from './dto/create-message.input';
import { User } from '@/prisma/generated';
import { Authorization } from '@/src/shared/decorators/auth.decorator';
import { Authorized } from '@/src/shared/decorators/authorized.decorator';

@Resolver()
export class MessageResolver {
  constructor(private readonly messageService: MessageService) {}

  @Authorization()
  @Mutation(() => Boolean, {name: 'CreatMessage'})
  public async createMessage(
    @Authorized() user : User,
    @Args('data') createMessageInput: CreateMessageInput
  ) {
    return this.messageService.create(createMessageInput);
  }

  @Authorization()
  @Query(() => [MessageModel], { name: 'findMessage' })
  public async findMessage(
    @Args('content') search: string,
    @Args('id') chatId: string
  ) {
    return this.messageService.findMessage(search, chatId);
  }
  
  @Authorization()
  @Mutation(() => Boolean, {name: 'updateMessage'})
  public async updateMessage(
    @Args('id') id: string,
    @Args('content') content: string,
  ) {
    return this.messageService.update(id, content)
  }

  @Authorization()
  @Mutation(() => Boolean, {name: 'removeMessage'})
  public async removeMessage(@Args('id') id: string) {
    return this.messageService.remove(id);
  }
  
}
