import { Module } from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { AdjustmentsController } from './adjustments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Adjustment } from './entities/adjustment.entity';

@Module({
  controllers: [AdjustmentsController],
  providers: [AdjustmentsService],
  imports: [TypeOrmModule.forFeature([Adjustment])],
})
export class AdjustmentsModule {}
