import { Body, Controller, Delete, Get, Inject, Param, Patch, Post } from '@nestjs/common';
import { ColorsService } from './colors.service';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';
import { Connection, Repository } from 'typeorm';
import { Color } from './entities/color.entity';

@Controller('colors')
export class ColorsController {
  constructor(private readonly categoriesService: ColorsService) {}

  @Post()
  create(@Body() createColorDto: CreateColorDto) {
    return this.categoriesService.create(createColorDto);
  }

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColorDto: UpdateColorDto) {
    return this.categoriesService.update(+id, updateColorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}
