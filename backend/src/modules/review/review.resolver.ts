import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { User } from '@/prisma/generated'
import { Authorization } from '@/src/shared/decorators/auth.decorator'
import { Authorized } from '@/src/shared/decorators/authorized.decorator'

import { CreateReviewInput } from './inputs/create-review.input'
import { UpdateReviewInput } from './inputs/update-review.input'
import { ReviewModel } from './models/review.model'
import { ReviewService } from './review.service'

@Resolver('Review')
export class ReviewResolver {
  constructor(private readonly reviewService: ReviewService) {}

  @Authorization()
  @Mutation(() => Boolean, { name: 'createReview' })
  async createReview(
    @Authorized() user: User,
    @Args('data') input: CreateReviewInput
  ) {
    return this.reviewService.create(user, input)
  }

  @Authorization()
  @Query(() => [ReviewModel], { name: 'getMyReviews' })
  async getMyReviews(@Authorized() user: User) {
    return this.reviewService.getMyReviews(user.id)
  }

  @Query(() => [ReviewModel], { name: 'getReviewsByUser' })
  async getReviewsByUser(@Args('userId') userId: string) {
    return this.reviewService.getReviewsByUser(userId)
  }

  @Query(() => [ReviewModel], { name: 'getReviewsByAnnouncement' })
  async getReviewsByAnnoucement(
    @Args('announcementId') announcementId: string
  ) {
    return this.reviewService.getReviewsByAnnouncement(announcementId)
  }

  @Authorization()
  @Mutation(() => Boolean, { name: 'updateReview' })
  async updateReview(
    @Authorized() user: User,
    @Args('id') id: string,
    @Args('data') input: UpdateReviewInput
  ) {
    return this.reviewService.update(user, id, input)
  }

  @Authorization()
  @Mutation(() => Boolean, { name: 'deleteReview' })
  async deleteReview(@Authorized() user: User, @Args('id') id: string) {
    return this.reviewService.delete(user, id)
  }
}
