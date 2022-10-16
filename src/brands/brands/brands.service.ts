import { Inject, Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { Connection, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand)
    private repo: Repository<Brand>,
  ) {}

  create(createBrandDto: CreateBrandDto) {
    const response = this.repo
      .createQueryBuilder()
      .insert()
      .into(Brand)
      .values(createBrandDto)
      .execute();
    return response;
  }

  findAll() {
    const response = this.repo
      .createQueryBuilder()
      .select('*')
      .from(Brand, 'brands')
      .execute();
    return response;
  }

  findOne(id: number) {
    const response = this.repo
      .createQueryBuilder()
      .select('*')
      .from(Brand, 'brands')
      .where({
        id,
      })
      .execute();
    return response;
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    const response = this.repo
      .createQueryBuilder()
      .update(Brand)
      .set(UpdateBrandDto)
      .where('id = :id', { id })
      .execute();
    return response;
  }

  remove(id: number) {
    const response = this.repo
      .createQueryBuilder()
      .delete()
      .from(Brand)
      .where('id = :id', { id })
      .execute();
    return response;
  }
}
