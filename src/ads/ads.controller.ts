import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from "@nestjs/platform-express";
import { AddDto } from './add.dto';
import { Add } from './add.interface';
import { AdsService } from './ads.service';

@Controller('ads')
export class AdsController {
  constructor(private readonly adsService: AdsService) {}

  @Get()
  findAll(): Promise<Add[]> {
    return this.adsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Add> {
    return this.adsService.findOne(id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(@Body() createdAddDto: AddDto, @UploadedFile() file): Promise<Add> {
    console.log(file);
    
    // console.log(createdAddDto);
    
    
    return this.adsService.create(createdAddDto);
  }

  

  @Delete(':id')
  delete(@Param('id') id): Promise<Add> {
    return this.adsService.delete(id);
  }

  @Put(':id')
  update(@Body() updateAddDto: AddDto, @Param('id') id): Promise<Add> {
    return this.adsService.update(id, updateAddDto);
  }
}
