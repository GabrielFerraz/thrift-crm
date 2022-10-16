import { Inject, Injectable } from '@nestjs/common';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';
import { Connection, Repository } from 'typeorm';
import { Color } from './entities/color.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ColorsService {
  constructor(
    @InjectRepository(Color)
    private repo: Repository<Color>,
  ) {}

  create(createColorDto: CreateColorDto) {
    const response = this.repo
      .createQueryBuilder()
      .insert()
      .into(Color)
      .values(createColorDto)
      .execute();
    return response;
  }

  findAll() {
    const response = this.repo
      .createQueryBuilder()
      .select('*')
      .from(Color, 'colors')
      .execute();
    return response;
  }

  findOne(id: number) {
    const response = this.repo
      .createQueryBuilder()
      .select('*')
      .from(Color, 'colors')
      .where({
        id,
      })
      .execute();
    return response;
  }

  update(id: number, updateColorDto: UpdateColorDto) {
    const response = this.repo
      .createQueryBuilder()
      .update(Color)
      .set(UpdateColorDto)
      .where('id = :id', { id })
      .execute();
    return response;
  }

  remove(id: number) {
    const response = this.repo
      .createQueryBuilder()
      .delete()
      .from(Color)
      .where('id = :id', { id })
      .execute();
    return response;
  }
}
