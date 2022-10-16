import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConsignorsService } from './consignors.service';
import { CreateConsignorDto } from './dto/create-consignor.dto';
import { UpdateConsignorDto } from './dto/update-consignor.dto';

@Controller('consignors')
export class ConsignorsController {
  constructor(private readonly consignorsService: ConsignorsService) {}

  @Post()
  create(@Body() createConsignorDto: CreateConsignorDto) {
    return this.consignorsService.create(createConsignorDto);
  }

  @Get()
  findAll() {
    return this.consignorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consignorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConsignorDto: UpdateConsignorDto) {
    return this.consignorsService.update(+id, updateConsignorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consignorsService.remove(+id);
  }
}
