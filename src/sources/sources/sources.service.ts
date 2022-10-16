import { Inject, Injectable } from '@nestjs/common';
import { CreateSourceDto } from './dto/create-source.dto';
import { UpdateSourceDto } from './dto/update-source.dto';
import { Connection, Repository } from 'typeorm';
import { Source } from './entities/source.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SourcesService {
  constructor(
    @InjectRepository(Source)
    private repo: Repository<Source>,
  ) {}

  create(createSourceDto: CreateSourceDto) {
    const response = this.repo
      .createQueryBuilder()
      .insert()
      .into(Source)
      .values(createSourceDto)
      .execute();
    return response;
  }

  findAll() {
    const response = this.repo
      .createQueryBuilder()
      .select('*')
      .from(Source, 'source')
      .execute();
    return response;
  }

  findOne(id: number) {
    const response = this.repo
      .createQueryBuilder()
      .select('*')
      .from(Source, 'source')
      .where({
        id,
      })
      .execute();
    return response;
  }

  update(id: number, updateSourceDto: UpdateSourceDto) {
    const response = this.repo
      .createQueryBuilder()
      .update(Source)
      .set(updateSourceDto)
      .where('id = :id', { id })
      .execute();
    return response;
  }

  remove(id: number) {
    const response = this.repo
      .createQueryBuilder()
      .delete()
      .from(Source)
      .where('id = :id', { id })
      .execute();
    return response;
  }
}
