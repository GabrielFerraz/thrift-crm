import { Module } from '@nestjs/common';
import { SourcesService } from './sources.service';
import { SourcesController } from './sources.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Source } from './entities/source.entity';

@Module({
  controllers: [SourcesController],
  providers: [SourcesService],
  imports: [TypeOrmModule.forFeature([Source])],
})
export class SourcesModule {}
