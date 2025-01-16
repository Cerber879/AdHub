import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';

@Injectable()
export class CloudinaryService {
  private readonly logger = new Logger(CloudinaryService.name);

  constructor(private readonly configService: ConfigService) {
    cloudinary.config({
      cloud_name: this.configService.get<string>('CLOUDINARY_CLOUD_NAME'),
      api_key: this.configService.get<string>('CLOUDINARY_API_KEY'),
      api_secret: this.configService.get<string>('CLOUDINARY_API_SECRET'),
    });
  }

  public async upload(buffer: Buffer, key: string, mimetype: string) {
    return new Promise<string>((resolve, reject) => {
      try {
        console.log(mimetype)
        const stream = cloudinary.uploader.upload_stream(
          {
            public_id: key,
            resource_type: 'image',
            format: mimetype.split('/')[1],
          },
          (error, result) => {
            if (error) {
              this.logger.error(`Error uploading image: ${error.message}`);
              reject(new Error(`Cloudinary upload error: ${error.message}`));
            } else {
              resolve(result.secure_url);
            }
          }
        );

        const readableStream = new Readable();
        readableStream.push(buffer);
        readableStream.push(null);
        readableStream.pipe(stream);
      } catch (error) {
        this.logger.error(`Unexpected error during upload: ${error.message}`);
        reject(new Error('Unexpected error during upload'));
      }
    });
  }

  public async remove(key: string) {
    try {
      const result = await cloudinary.uploader.destroy(key);
      if (result.result === 'ok') {
        return true;
      } else {
        this.logger.error(`Failed to remove image: ${key}`);
        throw new Error(`Failed to remove image from Cloudinary: ${key}`);
      }
    } catch (error) {
      this.logger.error(`Error removing image: ${error.message}`);
      throw new Error(`Error removing file from Cloudinary: ${error.message}`);
    }
  }
}