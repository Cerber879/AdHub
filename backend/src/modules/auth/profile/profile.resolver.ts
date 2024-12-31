import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { ProfileService } from './profile.service';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js'
import * as Upload from 'graphql-upload/Upload.js'
import { Authorization } from '@/src/shared/decorators/auth.decorator';
import { Authorized } from '@/src/shared/decorators/authorized.decorator';
import { User } from '@/prisma/generated';
import { FileValidationPipe } from '@/src/shared/pipes/file-validation.pipe';

@Resolver('Profile')
export class ProfileResolver {
  public constructor(private readonly profileService: ProfileService) {}

  @Authorization()
  @Mutation(() => Boolean, { name: 'changeProfileAvatar' })
  public async changeAvatar(
      @Authorized() user: User,
      @Args('avatar', { type: () => GraphQLUpload }, FileValidationPipe)
      avatar: Upload
  ) {
      return this.profileService.changeAvatar(user, avatar)
  }

  @Authorization()
	@Mutation(() => Boolean, { name: 'removeProfileAvatar' })
	public async removeAvatar(@Authorized() user: User) {
		return this.profileService.removeAvatar(user)
	}
}