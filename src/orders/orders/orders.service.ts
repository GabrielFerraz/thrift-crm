import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
import { Connection, Repository } from 'typeorm';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private repo: Repository<Order>,
  ) {}

  create(createOrderDto: CreateOrderDto) {
    const response = this.repo
      .createQueryBuilder()
      .insert()
      .into(Order)
      .values(createOrderDto)
      .execute();
    return response;
  }

  findAll() {
    const response = this.repo
      .createQueryBuilder()
      .select('*')
      .from(Order, 'orders')
      .execute();
    return response;
  }

  findOne(id: number) {
    const response = this.repo
      .createQueryBuilder()
      .select('*')
      .from(Order, 'orders')
      .where({
        id,
      })
      .execute();
    return response;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    const response = this.repo
      .createQueryBuilder()
      .update(Order)
      .set(updateOrderDto)
      .where('id = :id', { id })
      .execute();
    return response;
  }

  remove(id: number) {
    const response = this.repo
      .createQueryBuilder()
      .delete()
      .from(Order)
      .where('id = :id', { id })
      .execute();
    return response;
  }
}
