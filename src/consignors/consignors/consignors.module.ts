import { Module } from '@nestjs/common';
import { ConsignorsService } from './consignors.service';
import { ConsignorsController } from './consignors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consignor } from './entities/consignor.entity';

@Module({
  controllers: [ConsignorsController],
  providers: [ConsignorsService],
  imports: [TypeOrmModule.forFeature([Consignor])],
})
export class ConsignorsModule {}
