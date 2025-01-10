import { Message } from '@/prisma/generated';
import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

@ObjectType()
export class MessageModel implements Message {
  @Field(() => ID)
  public id: string;

  @Field(() => String)
  public content: string;

  @Field(() => Int)
  public status: number;

  @Field(() => Date)
  public sentAt: Date;

  @Field(() => String)
  public isEdited: boolean;

  @Field(() => String)
  public senderId: string;
  
  @Field(() => String)
  public chatId: string;
}
