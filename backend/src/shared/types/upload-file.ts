import { ReadStream } from 'fs'

export interface UploadedFile {
  filename: string
  mimetype: string
  createReadStream: () => ReadStream
}
