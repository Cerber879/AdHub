import { Field, InputType, Int } from '@nestjs/graphql'
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Length,
  Min
} from 'class-validator'

@InputType()
export class AnnouncementFiltersInput {
  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber({}, { message: 'minPrice должно быть числом' })
  @Min(0, { message: 'minPrice не может быть меньше 0' })
  minPrice?: number

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber({}, { message: 'maxPrice должно быть числом' })
  @IsPositive({ message: 'maxPrice должно быть положительным числом' })
  maxPrice?: number

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @Length(1, 50, {
    message: 'Длина condition должна быть от 1 до 50 символов'
  })
  condition?: string

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  categoryId?: string

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  search?: string

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'sort не может быть пустым' })
  sort?: string

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber({}, { message: 'skip должно быть числом' })
  @Min(0, { message: 'skip не может быть меньше 0' })
  skip?: number

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber({}, { message: 'take должно быть числом' })
  @IsPositive({ message: 'take должно быть положительным числом' })
  take?: number

  @Field(() => String, { nullable: true })
  displayType?: string
}
