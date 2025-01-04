import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { PhotoService } from './photo.service';
import { CreatePhotoInput } from './inputs/create-photo.input';
import { UpdatePhotoInput } from './inputs/update-photo.input';
import { PhotoModel } from './models/photo.model';

@Resolver('Photo')
export class PhotoResolver {
  constructor(private readonly photoService: PhotoService) {}

  @Mutation(() => Boolean, { name: 'addPhotoToAnnouncement' })
  async addPhotoToAnnouncement(@Args('data') input: CreatePhotoInput) {
    return this.photoService.create(input);
  }

  @Query(() => [PhotoModel], { name: 'getPhotosByAnnouncementID' })
  async getPhotosByAnnouncementID(@Args('id') announcementID: string) {
    return this.photoService.findByAnnouncementID(announcementID);
  }

  @Mutation(() => Boolean, { name: 'deletePhoto' })
  async deletePhoto(@Args('id') id: string) {
    return this.photoService.delete(id);
  }

  @Mutation(() => Boolean)
  async updatePhotos(
    @Args('deletePhotoIds', { type: () => [String] }) deletePhotoIds: string[],
    @Args('newPhotos', { type: () => [CreatePhotoInput] }) newPhotos: CreatePhotoInput[]
  ) {
    if (deletePhotoIds && deletePhotoIds.length > 0) {
      for (const photoId of deletePhotoIds) {
        await this.deletePhoto(photoId);  
      }
    }

    if (newPhotos && newPhotos.length > 0) {
      for (const photo of newPhotos) {
        await this.addPhotoToAnnouncement(photo);  
      }
    }

    return true; 
  }
}
