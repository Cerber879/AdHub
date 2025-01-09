import { Message } from '@/prisma/generated';
import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

@ObjectType()
export class MessageModel implements Message {

  @Field(() => ID)
  public id: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  public Content: string;

  @IsInt()
  @Field(() => Int)
  public Status: number;

  @Field(() => Date)
  public Date: Date;

  @Field(() => String)
  public userID: string;
  
  @Field(() => String)
  public chatID: string;

}
