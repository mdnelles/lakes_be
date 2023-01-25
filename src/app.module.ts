import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoClient, ServerApiVersion } from 'mongodb';
import { DetailsSchema } from './schema/details.schema';
import { DetailsService } from './details/details.service';
import { DetailsController } from './details/details.controller';
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
    MongooseModule.forFeature([{ name: 'Details', schema: DetailsSchema }]),
  ],
  controllers: [AppController, DetailsController],
  providers: [AppService, DetailsService],
})
export class AppModule {}
