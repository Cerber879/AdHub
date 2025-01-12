import { BadRequestException, Injectable } from '@nestjs/common'
import { FileUpload, Upload } from 'graphql-upload-minimal'

import sharp from 'sharp'

import { User } from '@/prisma/generated'
import { PrismaService } from '@/src/core/prisma/prisma.service'

import { ChangeProfileInfoInput } from './inputs/change-profile-info.input'
import { SocialLinkInput, SocialLinkOrderInput } from './inputs/social-link.input'

@Injectable()
export class ProfileService {
  public constructor(private readonly prismaService: PrismaService) {}

	public async changeAvatar(user: User, file: FileUpload) {
		if (user.avatar) {
			// Удаление старого изображения из БД
			await this.prismaService.user.update({
				where: { id: user.id },
				data: { avatar: null }, // Очищаем старое изображение
			});
		}

		const chunks: Buffer[] = [];

		for await (const chunk of file.createReadStream()) {
			chunks.push(chunk);
		}

		const buffer = Buffer.concat(chunks); // Получаем весь файл в виде буфера

		// Преобразование изображения в формат WebP
		const processedBuffer = await sharp(buffer)
			.resize(512, 512) // Преобразуем изображение в размер 512x512
			.webp() // Преобразуем в формат WebP
			.toBuffer(); // Конвертируем в буфер

		// Преобразуем изображение в строку Base64
		const avatarBase64 = processedBuffer.toString('base64');

		// Сохраняем изображение в базе данных (например, как строку Base64)
		await this.prismaService.user.update({
			where: { id: user.id },
			data: { avatar: avatarBase64 },
		});

		return true;
	}


  public async deleteAvatar(userId: string): Promise<boolean> {
    await this.prismaService.user.update({
      where: { id: userId },
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

	public async createSocialLink(user: User, input: SocialLinkInput) {
		const { title, url } = input

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
		const { title, url } = input

		await this.prismaService.socialLink.update({
			where: {
				id
			},
			data: {
				title,
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
