import { Inject, Injectable } from '@nestjs/common';
import { CreateConfigDto } from './dto/create-config.dto';
import { UpdateConfigDto } from './dto/update-config.dto';
import { Connection, Repository } from 'typeorm';
import { Config } from './entities/config.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ConfigService {
  constructor(
    @InjectRepository(Config)
    private repo: Repository<Config>,
  ) {}

  create(createConfigDto: CreateConfigDto) {
    const response = this.repo
      .createQueryBuilder()
      .insert()
      .into(Config)
      .values(createConfigDto)
      .execute();
    return response;
  }

  findAll() {
    const response = this.repo
      .createQueryBuilder()
      .select('*')
      .from(Config, 'config')
      .execute();
    return response;
  }

  findOne(id: number) {
    const response = this.repo
      .createQueryBuilder()
      .select('*')
      .from(Config, 'config')
      .where({
        id,
      })
      .execute();
    return response;
  }

  update(id: number, updateConfigDto: UpdateConfigDto) {
    const response = this.repo
      .createQueryBuilder()
      .update(Config)
      .set(UpdateConfigDto)
      .where('id = :id', { id })
      .execute();
    return response;
  }

  remove(id: number) {
    const response = this.repo
      .createQueryBuilder()
      .delete()
      .from(Config)
      .where('id = :id', { id })
      .execute();
    return response;
  }
}
