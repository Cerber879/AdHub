import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { AnnouncementStatus, User } from '@/prisma/generated'
import { Authorization } from '@/src/shared/decorators/auth.decorator'
import { Authorized } from '@/src/shared/decorators/authorized.decorator'

import { FavouritesModel } from '../favourites/models/favourite.model'

import { AnnouncementService } from './announcement.service'
import { CreateAnnouncementInput } from './inputs/create-announcement.input'
import { AnnouncementFiltersInput } from './inputs/search-announcement.input'
import {
  UpdateAnnouncementInput,
  UpdateAnnouncementMixedInput
} from './inputs/update-announcement.input'
import { AnnouncementModel } from './models/announcement.model'

@Resolver('Announcement')
export class AnnouncementResolver {
  constructor(private readonly announcementService: AnnouncementService) {}

  @Authorization()
  @Mutation(() => Boolean, { name: 'createAnnouncement' })
  async createAnnouncement(
    @Authorized() user: User,
    @Args('data') input: CreateAnnouncementInput
  ) {
    return this.announcementService.create(input, user)
  }

  @Query(() => [AnnouncementModel], { name: 'findAllAnnouncements' })
  async findAllAnnouncements() {
    return this.announcementService.findAllAnnouncements()
  }

  @Query(() => [AnnouncementModel], { name: 'findAnnouncementsByFilters' })
  async findAnnouncements(
    @Args('data', { type: () => AnnouncementFiltersInput })
    filters: AnnouncementFiltersInput
  ) {
    return this.announcementService.findManyWithFilters(filters)
  }

  @Query(() => AnnouncementModel, { name: 'getAnnouncementById' })
  async findById(@Args('id') id: string) {
    return this.announcementService.findById(id)
  }

  @Query(() => [AnnouncementModel], { name: 'getAnnouncementByIds' })
  async findByIds(@Args('ids', { type: () => [String] }) data: string[]) {
    return this.announcementService.findByIds(data)
  }

  @Authorization()
  @Query(() => [AnnouncementModel], { name: 'getAnnouncementByProfile' })
  async findByProfile(@Authorized() user: User) {
    return this.announcementService.findByProfile(user)
  }

  @Query(() => [AnnouncementModel], { name: 'getAnnouncementByUser' })
  async findByUser(@Args('userId') userId: string) {
    return this.announcementService.findByUser(userId)
  }

  @Query(() => AnnouncementModel, { name: 'getAnnouncementByName' })
  async findByName(@Args('name') name: string) {
    return this.announcementService.findByName(name)
  }

  @Query(() => [AnnouncementModel], { name: 'getAnnouncementsByCategory' })
  async findByCategory(@Args('id') categoryId: string) {
    return this.announcementService.findByCategory(categoryId)
  }

  @Authorization()
  @Mutation(() => Boolean, { name: 'updateAnnouncement' })
  async update(@Args('data') data: UpdateAnnouncementMixedInput) {
    return this.announcementService.update(data.id, data.input)
  }
  
  @Authorization()
  @Mutation(() => Boolean, { name: 'changeStatusAnnouncement' })
  async changeStatus(
    @Args('id') id: string,
    @Args('status') status: string
  ) {
    return this.announcementService.changeStatus(id, status)
  }

  @Authorization()
  @Mutation(() => Boolean, { name: 'deleteAnnouncement' })
  async delete(@Args('id') id: string) {
    return this.announcementService.delete(id)
  }
}
