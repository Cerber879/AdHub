import { AccountModule } from './../modules/auth/account/account.module';
import { ApolloDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'

import { IS_DEV_ENV } from '../shared/utils/is-dev.util'

import { PrismaModule } from './prisma/prisma.module'
import { GraphQLModule } from '@nestjs/graphql'
import { getGraphQLConfig } from './config/graphql.config'
import { RedisModule } from './redis/redis.module';
import { SessionModule } from '../modules/auth/session/session.module';
import { ProfileModule } from '../modules/auth/profile/profile.module';
import { AnnouncementModule } from '../modules/announcement/announcement.module';

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
		AnnouncementModule
  ],
})
export class CoreModule {}
