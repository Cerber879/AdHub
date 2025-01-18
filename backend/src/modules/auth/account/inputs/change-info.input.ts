import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

@InputType()
export class ChangeProfileInfoInput {
  @Field(() => String)
  @IsString({ message: 'Имя должно быть строкой' })
  @IsNotEmpty({ message: 'Имя не должно быть пустым' })
  @MaxLength(100, { message: 'Имя не может превышать 100 символов' })
  public displayName: string;

  @Field(() => String)
  @IsString({ message: 'Биография должна быть строкой' })
  @IsNotEmpty({ message: 'Биография не должна быть пустой' })
  @MaxLength(1000, { message: 'Биография не может превышать 1000 символов' })
  public bio: string;
}
