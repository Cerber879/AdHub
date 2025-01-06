import type { AnnouncementCharacteristic } from "@/prisma/generated";
import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class AnnouncementCharacteristicModel implements AnnouncementCharacteristic {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  value: string;
  @Field(() => String)
  productId:        string       
  @Field(() => String)
  characteristicId: string    

}
