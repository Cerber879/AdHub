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

  @Query(() => MessageModel, { name: 'FindUniqMessage' })
  public async findOne(@Args('id') id: string) {
    return this.messageService.findOne(id);
  }

  @Mutation(() => Boolean, {name: 'DeleteMessage'})
  public async removeMessage(@Args('id') id: string) {
    return this.messageService.remove(id);
  }
}
