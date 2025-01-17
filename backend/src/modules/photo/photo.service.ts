import { Injectable } from '@nestjs/common'
import * as Upload from 'graphql-upload/Upload.js'
import { v4 as uuidv4 } from 'uuid'

import { PrismaService } from '@/src/core/prisma/prisma.service'

import { CloudinaryService } from '../libs/storage/cloudinary.service'

@Injectable()
export class PhotoService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly cloudinaryService: CloudinaryService
  ) {}

  public async addPhotoToAnnouncement(announcementID: string, files: Upload[]) {
    try {
      console.log('files', files)
      for (const file of files) {
        const buffer = await this.readFile(file)

        const uniqueID = uuidv4()
        let fileName = `avatars/${uniqueID}.webp`

        if (file.mimetype === 'image/gif') {
          fileName = `avatars/${uniqueID}.gif`
        }

        const fileUrl = await this.cloudinaryService.upload(
          buffer,
          fileName,
          file.mimetype
        )

        await this.prismaService.photo.create({
          data: {
            id: uniqueID,
            link: fileUrl,
            announcementID: announcementID
          }
        })
      }

      return true
    } catch (error) {
      throw new Error('Error changing avatar')
    }
  }

  private async readFile(file: any): Promise<Buffer> {
    const chunks: Buffer[] = []
    for await (const chunk of file.createReadStream()) {
      chunks.push(chunk)
    }
    return Buffer.concat(chunks)
  }

  async findByAnnouncementId(announcementID: string) {
    const photos = await this.prismaService.photo.findMany({
      where: {
        announcementID
      },
      select: { link: true }
    })

    return photos.map(photo => photo.link)
  }

  async delete(id: string) {
    await this.prismaService.photo.delete({
      where: {
        id
      }
    })

    return true
  }
}
