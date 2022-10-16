import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Connection, Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private repo: Repository<Category>,
  ) {}

  create(createCategoryDto: CreateCategoryDto) {
    const response = this.repo
      .createQueryBuilder()
      .insert()
      .into(Category)
      .values(createCategoryDto)
      .execute();
    return response;
  }

  findAll() {
    const response = this.repo
      .createQueryBuilder()
      .select('*')
      .from(Category, 'categories')
      .execute();
    return response;
  }

  findOne(id: number) {
    const response = this.repo
      .createQueryBuilder()
      .select('*')
      .from(Category, 'categories')
      .where({
        id,
      })
      .execute();
    return response;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const response = this.repo
      .createQueryBuilder()
      .update(Category)
      .set(UpdateCategoryDto)
      .where('id = :id', { id })
      .execute();
    return response;
  }

  remove(id: number) {
    const response = this.repo
      .createQueryBuilder()
      .delete()
      .from(Category)
      .where('id = :id', { id })
      .execute();
    return response;
  }
}
