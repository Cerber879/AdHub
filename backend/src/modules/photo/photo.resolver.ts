import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js'
import * as Upload from 'graphql-upload/Upload.js'

import { PhotoService } from './photo.service'
import { FileValidationPipe } from '@/src/shared/pipes/file-validation.pipe'
import { CloudinaryService } from '../libs/storage/cloudinary.service'

@Resolver('Photo')
export class PhotoResolver {
  constructor(
    private readonly photoService: PhotoService,
    private readonly cloudinaryService: CloudinaryService
  ) {}

  @Mutation(() => Boolean, { name: 'addPhotoToAnnouncement' })
  async addPhotoToAnnouncement(
    @Args('announcementID') announcementID: string,
    @Args('files', { type: () => [GraphQLUpload] }, FileValidationPipe)
    files: Upload[]
  ) {
    return this.photoService.addPhotoToAnnouncement(announcementID, files)
  }

  @Query(() => [String], { name: 'getPhotosByAnnouncementId' })
  async getPhotosByAnnouncementId(@Args('id') id: string) {
    return this.photoService.findByAnnouncementId(id)
  }

  @Mutation(() => Boolean, { name: 'deletePhoto' })
  async deletePhoto(@Args('id') id: string) {
    return this.photoService.delete(id)
  }

  @Mutation(() => Boolean)
  async updatePhotos(
    @Args('announcementID') announcementID: string,
    @Args('deletePhotoIds', { type: () => [String] })
    deletePhotoIds: string[],
    @Args('newPhotos', { type: () => [GraphQLUpload] })
    newPhotos: Upload[],
  ) {
    if (deletePhotoIds && deletePhotoIds.length > 0) {
      for (const photoId of deletePhotoIds) {
        await this.deletePhoto(photoId)
			  await this.cloudinaryService.remove(photoId);
      }
    }

    await this.photoService.addPhotoToAnnouncement(announcementID, newPhotos)

    return true
  }
}
