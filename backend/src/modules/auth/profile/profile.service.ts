import { BadRequestException, Injectable, Logger } from '@nestjs/common'

import * as Upload from 'graphql-upload/Upload.js'

import { User } from '@/prisma/generated'
import { PrismaService } from '@/src/core/prisma/prisma.service'

import { ChangeProfileInfoInput } from './inputs/change-profile-info.input'
import { SocialLinkInput, SocialLinkOrderInput } from './inputs/social-link.input'
import { CloudinaryService } from '../../libs/storage/cloudinary.service'

@Injectable()
export class ProfileService {
	private readonly logger = new Logger(ProfileService.name);

  public constructor(
		private readonly prismaService: PrismaService,
		private readonly cloudinaryService: CloudinaryService
	) {}

  public async changeAvatar(user: User, file: Upload) {
    try {
      if (user.avatar) {
        await this.cloudinaryService.remove(user.avatar);
      }

      const buffer = await this.readFile(file);
      let fileName = `avatars/${user.id}.webp`;

      if (file.mimetype === 'image/gif') {
        fileName = `avatars/${user.id}.gif`;
      }

      const fileUrl = await this.cloudinaryService.upload(buffer, fileName, file.mimetype);

      await this.prismaService.user.update({
        where: { id: user.id },
        data: { avatar: fileUrl },
      });

      return true;
    } catch (error) {
      this.logger.error(`Error changing avatar for user ${user.id}: ${error.message}`);
      throw new Error('Error changing avatar');
    }
  }

	private async readFile(file: any): Promise<Buffer> {
    const chunks: Buffer[] = [];
    for await (const chunk of file.createReadStream()) {
      chunks.push(chunk);
    }
    return Buffer.concat(chunks);
  }

  public async deleteAvatar(user: User): Promise<boolean> {

		if (user.avatar) {
			await this.cloudinaryService.remove(user.avatar);
		}

    await this.prismaService.user.update({
      where: { id: user.id },
      data: { avatar: null }, 
    });

    return true;
  }

  public async changeInfo(user: User, input: ChangeProfileInfoInput) {
    const { displayName, bio } = input

    if (displayName === '') {
      throw new BadRequestException('Имя не должно быть пустым')
    }

    await this.prismaService.user.update({
      where: {
        id: user.id
      },
      data: {
        displayName,
        bio
      }
    })

    return true
  }

  public async findSocialLinks(user: User) {
		const socialLinks = await this.prismaService.socialLink.findMany({
			where: {
				userId: user.id
			},
			orderBy: {
				position: 'asc'
			}
		})

		return socialLinks
	}

	public async findUserInfo(userId: string) {
		const infoUser = await this.prismaService.user.findUnique({
			where: {
				id: userId
			},
			select: {
				bio: true,
				SocialLink: {
						select: {
								title: true,
								url: true,
								description: true
						},
						orderBy: {
								position: 'asc',
						},
				},
			}
		})

		return {
			bio: infoUser.bio,
			socialLinks: infoUser.SocialLink || [],
		}
	}

	public async createSocialLink(user: User, input: SocialLinkInput) {
		const { title, url, description } = input

		const lastSocialLink = await this.prismaService.socialLink.findFirst({
			where: {
				userId: user.id
			},
			orderBy: {
				position: 'desc'
			}
		})

		const newPosition = lastSocialLink ? lastSocialLink.position + 1 : 0

		await this.prismaService.socialLink.create({
			data: {
				title,
				description,
				url,
				position: newPosition,
				user: {
					connect: {
						id: user.id
					}
				}
			}
		})

		return true
	}

	public async reorderSocialLinks(list: SocialLinkOrderInput[]) {
		if (!list.length) {
			return
		}

		const updatePromises = list.map(socialLink => {
			return this.prismaService.socialLink.update({
				where: {
					id: socialLink.id
				},
				data: {
					position: socialLink.position
				}
			})
		})

		await Promise.all(updatePromises)

		return true
	}

	public async updateSocialLink(id: string, input: SocialLinkInput) {
		const { title, url, description } = input

		await this.prismaService.socialLink.update({
			where: {
				id
			},
			data: {
				title,
				description,
				url
			}
		})

		return true
	}

	public async removeSocialLink(id: string) {
		await this.prismaService.socialLink.delete({
			where: {
				id
			}
		})

		return true
	}
}
