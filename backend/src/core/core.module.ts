import { ApolloDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'

import { AnnouncementModule } from '../modules/announcement/announcement.module'
import { ProfileModule } from '../modules/auth/profile/profile.module'
import { SessionModule } from '../modules/auth/session/session.module'
import { AnnouncementCharacteristicModule } from '../modules/category/announcement-characteristic/announcement-characteristic.module'
import { CategoryModule } from '../modules/category/category/category.module'
import { CharacteristicModule } from '../modules/category/characteristic/characteristic.module'
import { FavouritesModule } from '../modules/favourites/favourites.module'
import { PhotoModule } from '../modules/photo/photo.module'
import { IS_DEV_ENV } from '../shared/utils/is-dev.util'

import { AccountModule } from './../modules/auth/account/account.module'
import { getGraphQLConfig } from './config/graphql.config'

import { ChatModule } from '../modules/chat/chat.module';
import { MessageModule } from '../modules/message/message.module';

import { PrismaModule } from './prisma/prisma.module'
import { RedisModule } from './redis/redis.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: !IS_DEV_ENV,
      isGlobal: true
    }),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      imports: [ConfigModule],
      useFactory: getGraphQLConfig,
      inject: [ConfigService]
    }),
    PrismaModule,
    RedisModule,
    AccountModule,
    SessionModule,
    ProfileModule,
    AnnouncementModule,
    CategoryModule,
    PhotoModule,
    FavouritesModule,
    CharacteristicModule,
    AnnouncementCharacteristicModule,
    ChatModule,
		MessageModule
  ]
})
export class CoreModule {}
