import * as Upload from 'graphql-upload/Upload.js'
import { PrismaService } from '@/src/core/prisma/prisma.service';
import { Injectable, BadRequestException } from '@nestjs/common';
import { User } from '@/prisma/generated';
import sharp from 'sharp';
import { ChangeProfileInfoInput } from './inputs/change-profile-info.input';

@Injectable()
export class ProfileService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async changeAvatar(user: User, file: Upload) {
    if (user.avatar) {
        await this.prismaService.user.update({
            where: {
                id: user.id
            },
            data: {
                avatar: null
            }
        });
    }

    const chunks: Buffer[] = []

    for await (const chunk of file.createReadStream()) {
        chunks.push(chunk)
    }

    const buffer = Buffer.concat(chunks)

    const fileName = `/profiles/${user.id}.webp`

    let processedBuffer: Buffer

    if (file.filename && file.filename.endsWith('.gif')) {
        processedBuffer = await sharp(buffer, { animated: true })
            .resize(512, 512)
            .webp()
            .toBuffer()
    } else {
        processedBuffer = await sharp(buffer)
            .resize(512, 512)
            .webp()
            .toBuffer()
    }

    await this.prismaService.user.update({
        where: {
            id: user.id
        },
        data: {
            avatar: fileName
        }
    })

    return true
  }

  public async removeAvatar(user: User) {
    if (!user.avatar) {
        return
    }

    await this.prismaService.user.update({
        where: {
            id: user.id
        },
        data: {
            avatar: null
        }
    })

    return true
  }

  public async changeInfo(user: User, input: ChangeProfileInfoInput) {
    const { displayName, bio } = input

    if (displayName !== '') {
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
}
