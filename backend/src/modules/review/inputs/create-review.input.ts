import { Field, InputType } from '@nestjs/graphql'
import { IsInt, IsString, IsUUID, Length, Max, Min } from 'class-validator'

@InputType()
export class CreateReviewInput {
  @Field()
  @IsInt({ message: 'Рейтинг должен быть целым числом' })
  @Min(1, { message: 'Рейтинг не может быть меньше 1' })
  @Max(5, { message: 'Рейтинг не может быть больше 5' })
  rating: number

  @Field()
  @IsString({ message: 'Содержание отзыва должно быть строкой' })
  @Length(5, 1000, {
    message: 'Содержание отзыва должно быть от 5 до 1000 символов'
  })
  content: string

  @Field()
  userId: string

  @Field()
  announcementId: string
}
