import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LakesController } from './lakes/lakes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoClient, ServerApiVersion } from 'mongodb';
import { DetailsSchema } from './schema/details.schema';
/* eslint-disable */
const env = require('dotenv').config().parsed;

const uri = `mongodb+srv://${env.NODE_JS_MONGO_USER}:${env.NODE_JS_MONGO_PASSWORD}@{env.NODE_JS_MONGO_HOST}/?retryWrites=true&w=majority`;

/*
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});*/


@Module({
  imports: [
    MongooseModule.forRoot(uri,
      { dbName: env.NODE_JS_MONGO_DB_NAME, useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 },
    ),
    MongooseModule.forFeature([{ name: 'Details', schema: DetailsSchema }]),
  ],
  controllers: [AppController, LakesController],
  providers: [AppService],
});

export class AppModule {}

/*
@Module({
  imports: [
    MongooseModule.forRoot(uri),
    MongooseModule.forFeature([{ name: 'Details', schema: DetailsSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})*/