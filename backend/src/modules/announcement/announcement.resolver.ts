import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AnnouncementService } from './announcement.service';
import { CreateAnnouncementInput } from './inputs/create-announcement.input';
import { UpdateAnnouncementInput, UpdateAnnouncementMixedInput } from './inputs/update-announcement.input';
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
  async findByCategory(@Args('id') categoryId: string) {
    return this.announcementService.findByCategory(categoryId);
  }

  @Authorization()
  @Mutation(() => Boolean, { name: 'updateAnnouncement' })
  async update(
    @Args('data') data: UpdateAnnouncementMixedInput
  ) {
    return this.announcementService.update(data.id, data.input);
  }

  @Authorization()
  @Mutation(() => Boolean, { name: 'deleteAnnouncement' })
  async delete(@Args('id') id: string) {
    return this.announcementService.delete(id);
  }
}
