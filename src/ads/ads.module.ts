import { Module } from '@nestjs/common';
import { AdsController } from './ads.controller';
import { AdsService } from './ads.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AddSchema } from './add.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Add', schema: AddSchema }])],
  controllers: [AdsController],
  providers: [AdsService],
})
export class AdsModule {}
