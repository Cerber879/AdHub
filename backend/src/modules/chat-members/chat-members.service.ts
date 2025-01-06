import { Injectable } from '@nestjs/common';
import { CreateChatMemberInput } from './dto/create-chat-member.input';
import { UpdateChatMemberInput } from './dto/update-chat-member.input';

@Injectable()
export class ChatMembersService {
  create(createChatMemberInput: CreateChatMemberInput) {
    return 'This action adds a new chatMember';
  }

  findAll() {
    return `This action returns all chatMembers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chatMember`;
  }

  update(id: number, updateChatMemberInput: UpdateChatMemberInput) {
    return `This action updates a #${id} chatMember`;
  }

  remove(id: number) {
    return `This action removes a #${id} chatMember`;
  }
}
