import { Inject, Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private repo: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const response = this.repo
      .createQueryBuilder()
      .insert()
      .into(Product)
      .values(createProductDto)
      .execute();
    return response;
  }

  async findAll(page = 1) {
    const response = await this.repo
      .createQueryBuilder()
      .select('*')
      .limit(10)
      .offset(10 * (page - 1))
      .execute();
    return { products: response };
  }

  findOne(id: number) {
    const response = this.repo
      .createQueryBuilder()
      .select('*')
      .where({
        id,
      })
      .execute();
    return response;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const response = this.repo
      .createQueryBuilder()
      .update(Product)
      .set(UpdateProductDto)
      .where('id = :id', { id })
      .execute();
    return response;
  }

  remove(id: number) {
    const response = this.repo
      .createQueryBuilder()
      .delete()
      .from(Product)
      .where('id = :id', { id })
      .execute();
    return response;
  }
}
