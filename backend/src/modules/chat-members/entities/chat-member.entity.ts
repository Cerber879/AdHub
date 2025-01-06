import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ChatMemberModel {
  @Field(() => String)
  public id: string;
  @Field(() => String)
  public chatID: string;
  @Field(() => String)
  public userID: string;
}


// model ChatMembers {
//   id     String @id @default(uuid())

//   chatID String
//   userID String

//   user User @relation(fields: [userID], references: [id])
//   chat Chat @relation(fields: [chatID], references: [id])
// }