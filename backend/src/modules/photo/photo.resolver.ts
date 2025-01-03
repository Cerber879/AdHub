import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { PhotoService } from './photo.service';
import { CreatePhotoInput } from './inputs/create-photo.input';
import { UpdatePhotoInput } from './inputs/update-photo.input';
import { PhotoModel } from './models/photo.model';

@Resolver('Photo')
export class PhotoResolver {
  constructor(private readonly photoService: PhotoService) {}

  @Mutation(() => PhotoModel, { name: 'addPhotoToAnnouncement' })
  async addPhotoToAnnouncement(@Args('input') input: CreatePhotoInput) {
    return this.photoService.create(input);
  }

  @Query(() => [PhotoModel], { name: 'getPhotosByAnnouncementID' })
  async getPhotosByAnnouncementID(@Args('announcementID') announcementID: string) {
    return this.photoService.findByAnnouncementID(announcementID);
  }

  @Mutation(() => PhotoModel, { name: 'updatePhoto' })
  async updatePhoto(@Args('id') id: string, @Args('input') input: UpdatePhotoInput) {
    return this.photoService.update(id, input);
  }

  @Mutation(() => Boolean, { name: 'deletePhoto' })
  async deletePhoto(@Args('id') id: string) {
    return this.photoService.delete(id);
  }
}
