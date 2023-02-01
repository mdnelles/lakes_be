import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ServerApiVersion } from 'mongodb';
import { DetailSchema } from './schema/detail.schema';
import { DetailService } from './detail/detail.service';
import { DetailController } from './detail/detail.controller';
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
    MongooseModule.forFeature([{ name: 'Detail', schema: DetailSchema }]),
  ],
  controllers: [AppController, DetailController],
  providers: [AppService, DetailService],
})
export class AppModule {}
