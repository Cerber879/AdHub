import { Message } from '@/prisma/generated';
import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

@ObjectType()
export class MessageModel implements Message {

  @Field(() => ID)
  id: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  Content: string;

  @IsInt()
  @Field(() => Int)
  Status: number;

  @Field(() => Date)
  Date: Date;

  @Field(() => String)
  userID: string;
  
  @Field(() => String)
  chatID: string;

}
