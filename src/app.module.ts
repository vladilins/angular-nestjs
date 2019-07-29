import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AdsModule } from './ads/ads.module';
import config from './config/keys';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [AdsModule, MongooseModule.forRoot(config.mongoURI), MulterModule.register({
    dest: './uploads'
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
