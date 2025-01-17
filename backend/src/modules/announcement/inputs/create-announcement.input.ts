import { Optional } from '@nestjs/common'
import { Field, Float, InputType } from '@nestjs/graphql'
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength
} from 'class-validator'
import { GraphQLJSONObject } from 'graphql-type-json'
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js'
import * as Upload from 'graphql-upload/Upload.js'

import { AddToAnnouncementInput } from '../../category/announcement-characteristic/inputs/add-to-announcement.input'

@InputType()
export class CreateAnnouncementInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  public name: string

  @Field(() => Float)
  @IsNumber()
  @IsPositive()
  public price: number

  @Field(() => String, { nullable: true })
  @IsString()
  @MaxLength(3000)
  @Optional()
  public description?: string

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public status: string

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public condition: string

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public categoryId: string

  @Field(() => [GraphQLUpload])
  public photos: Upload[]

  @Field(() => GraphQLJSONObject, { nullable: true })
  @Optional()
  public charactiristics?: Record<string, AddToAnnouncementInput>
}
