import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LakesController } from './lakes/lakes.controller';

@Module({
  imports: [],
  controllers: [AppController, LakesController],
  providers: [AppService],
})
export class AppModule {}
