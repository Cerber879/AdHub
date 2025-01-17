import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'

import { User } from '@/prisma/generated'
import { Authorization } from '@/src/shared/decorators/auth.decorator'
import { Authorized } from '@/src/shared/decorators/authorized.decorator'

import { MessageModel } from '../message/entities/message.entity'

import { ChatService } from './chat.service'
import { CreateMessageInputChat } from './dto/create-message.input'
import { ChatInfoOutput } from './dto/info-chat.output'

@Resolver()
export class ChatResolver {
  constructor(private readonly chatService: ChatService) {}

  @Authorization()
  @Mutation(() => Boolean, { name: 'createChat' })
  async createChat(
    @Authorized() user: User,
    @Args('friendId') friendId: string,
    @Args('productId') productId: string
  ): Promise<boolean> {
    return this.chatService.create(user.id, friendId, productId)
  }

  @Authorization()
  @Mutation(() => Boolean, { name: 'removeChat' })
  async removeChat(
    @Args('id', { type: () => String }) id: string
  ): Promise<boolean> {
    return this.chatService.remove(id)
  }

  @Authorization()
  @Query(() => [ChatInfoOutput], { name: 'getChats' })
  public async getChats(@Authorized() user: User) {
    return this.chatService.getChats(user.id)
  }

  @Authorization()
  @Query(() => [MessageModel], { name: 'getMessages' })
  public async getMessages(@Authorized() user, @Args('chatId') chatId: string) {
    return this.chatService.getMessages(user.id, chatId)
  }

  @Authorization()
  @Mutation(() => Boolean, { name: 'sendMessage' })
  public async sendMessage(
    @Authorized() user,
    @Args('input') input: CreateMessageInputChat
  ) {
    return this.chatService.sendMessage(user.id, input)
  }
}
