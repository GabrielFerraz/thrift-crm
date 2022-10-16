import { Inject, Injectable } from '@nestjs/common';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';
import { Connection, Repository } from 'typeorm';
import { Size } from './entities/size.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SizesService {
  constructor(
    @InjectRepository(Size)
    private repo: Repository<Size>,
  ) {}

  create(createSizeDto: CreateSizeDto) {
    const response = this.repo
      .createQueryBuilder()
      .insert()
      .into(Size)
      .values(createSizeDto)
      .execute();
    return response;
  }

  findAll() {
    const response = this.repo
      .createQueryBuilder()
      .select('*')
      .from(Size, 'size')
      .execute();
    return response;
  }

  findOne(id: number) {
    const response = this.repo
      .createQueryBuilder()
      .select('*')
      .from(Size, 'size')
      .where({
        id,
      })
      .execute();
    return response;
  }

  update(id: number, updateSizeDto: UpdateSizeDto) {
    const response = this.repo
      .createQueryBuilder()
      .update(Size)
      .set(updateSizeDto)
      .where('id = :id', { id })
      .execute();
    return response;
  }

  remove(id: number) {
    const response = this.repo
      .createQueryBuilder()
      .delete()
      .from(Size)
      .where('id = :id', { id })
      .execute();
    return response;
  }
}
