import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateReviewInput {
  @Field({ nullable: true })
  content?: string;

  @Field({ nullable: true })
  rating?: number;
}
