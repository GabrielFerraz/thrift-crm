import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigController } from './config.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Config } from './entities/config.entity';

@Module({
  controllers: [ConfigController],
  providers: [ConfigService],
  imports: [TypeOrmModule.forFeature([Config])],
})
export class ConfigModule {}
