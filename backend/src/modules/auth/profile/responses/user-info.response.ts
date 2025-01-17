import { Field, ObjectType } from '@nestjs/graphql'

import { SocialLinkModel } from '../models/social-link.model'

@ObjectType()
export class UserInfoResponse {
  @Field(() => String, { nullable: true })
  public bio: string

  @Field(() => [SocialLinksResponse], { nullable: true })
  public socialLinks: SocialLinksResponse[]
}

@ObjectType()
export class SocialLinksResponse {
  @Field(() => String)
  public title: string

  @Field(() => String)
  public description: string

  @Field(() => String)
  public url: string
}
