import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LakesController } from './lakes/lakes.controller';
const env = require('dotenv').config().parsed;

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${env.NODE_JS_MONGO_USER}:${env.NODE_JS_MONGO_PASSWORD}@${env.NODE_JS_MONGO_HOST}/?retryWrites=true&w=majority`,
      { dbName: 'LakesWorld' },
    ),
  ],
  controllers: [AppController, LakesController],
  providers: [AppService],
})
export class AppModule {}
