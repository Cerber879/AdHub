import type { Characteristic } from "@/prisma/generated";
import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class CharacteristicModel implements Characteristic {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  type: string;
  @Field(() => String)
  categoryId: string;

}
