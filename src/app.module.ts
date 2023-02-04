import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ServerApiVersion } from 'mongodb';

import { DetailSchema } from './schema/detail.schema';
import { DetailService } from './api/detail/detail.service';
import { DetailController } from './api/detail/detail.controller';

import { UserSchema } from './schema/user.schema';
import { UserService } from './api/user/user.service';
import { UserController } from './api/user/user.controller';

import { AuthModule } from './auth/auth.module';
//import { UserModule } from './api/user/user.module';
import { LoggerMiddleware } from './utils/logger.middleware';
import { TestModule } from './test/test.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
/* eslint-disable */
const env = require('dotenv').config().parsed;
const uri = `mongodb+srv://${env.NODE_JS_MONGO_USER}:${env.NODE_JS_MONGO_PASSWORD}@${env.NODE_JS_MONGO_HOST}/?retryWrites=true&w=majority`;

@Module({
  imports: [
    MongooseModule.forRoot(uri, {
      dbName: env.NODE_JS_MONGO_DB_NAME,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    }),
    MongooseModule.forFeature([
      { name: 'Detail', schema: DetailSchema },
      { name: 'User', schema: UserSchema },
    ]),
    GraphQLModule.forRoot<ApolloDriverConfig>({ driver: ApolloDriver }),
    AuthModule,
    TestModule,
  ],
  controllers: [AppController, DetailController, UserController],
  providers: [AppService, DetailService, UserService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('user', 'detail');
  }
}
//export class AppModule {}
