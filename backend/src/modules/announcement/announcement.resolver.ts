import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AnnouncementService } from './announcement.service';
import { CreateAnnouncementInput } from './inputs/create-announcement.input';
import { UpdateAnnouncementInput } from './inputs/update-announcement.input';
import { AnnouncementModel } from './models/announcement.model';
import { Authorization } from '@/src/shared/decorators/auth.decorator';
import { Authorized } from '@/src/shared/decorators/authorized.decorator';
import { User } from '@/prisma/generated';

@Resolver('Announcement')
export class AnnouncementResolver {
  constructor(private readonly announcementService: AnnouncementService) {}

  @Authorization()
  @Mutation(() => Boolean, { name: 'createAnnouncement' })
  async createAnnouncement(
    @Authorized() user: User,
    @Args('data') input: CreateAnnouncementInput
  ) {
    return this.announcementService.create(input, user);
  }

  @Query(() => AnnouncementModel, { name: 'getAnnouncementById' })
  async findById(@Args('id') id: string) {
    return this.announcementService.findById(id);
  }

  @Query(() => [AnnouncementModel], { name: 'getAnnouncementsByCategory' })
  async findByCategory(@Args('categoryId') categoryId: string) {
    return this.announcementService.findByCategory(categoryId);
  }

  @Authorization()
  @Mutation(() => Boolean, { name: 'updateAnnouncement' })
  async update(
    @Args('id') id: string,
    @Args('input') input: UpdateAnnouncementInput
  ) {
    return this.announcementService.update(id, input);
  }

  @Authorization()
  @Mutation(() => Boolean, { name: 'deleteAnnouncement' })
  async delete(@Args('id') id: string) {
    return this.announcementService.delete(id);
  }
}
