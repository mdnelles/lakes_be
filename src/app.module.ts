import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ServerApiVersion } from 'mongodb';

import { DetailSchema } from './schema/detail.schema';
import { DetailService } from './detail/detail.service';
import { DetailController } from './detail/detail.controller';

import { UserSchema } from './schema/user.schema';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

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
    AuthModule,
    UserModule,
  ],
  controllers: [AppController, DetailController, UserController],
  providers: [AppService, DetailService, UserService],
})
export class AppModule {}
