import { Inject, Injectable } from '@nestjs/common';
import { CreatePaymentMethodDto } from './dto/create-payment-method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment-method.dto';
import { Connection, Repository } from 'typeorm';
import { PaymentMethod } from './entities/payment-method.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PaymentMethodsService {
  constructor(
    @InjectRepository(PaymentMethod)
    private repo: Repository<PaymentMethod>,
  ) {}

  create(createPaymentMethodDto: CreatePaymentMethodDto) {
    const response = this.repo
      .createQueryBuilder()
      .insert()
      .into(PaymentMethod)
      .values(createPaymentMethodDto)
      .execute();
    return response;
  }

  findAll() {
    const response = this.repo
      .createQueryBuilder()
      .select('*')
      .from(PaymentMethod, 'payment')
      .execute();
    return response;
  }

  findOne(id: number) {
    const response = this.repo
      .createQueryBuilder()
      .select('*')
      .from(PaymentMethod, 'payment')
      .where({
        id,
      })
      .execute();
    return response;
  }

  update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    const response = this.repo
      .createQueryBuilder()
      .update(PaymentMethod)
      .set(updatePaymentMethodDto)
      .where('id = :id', { id })
      .execute();
    return response;
  }

  remove(id: number) {
    const response = this.repo
      .createQueryBuilder()
      .delete()
      .from(PaymentMethod)
      .where('id = :id', { id })
      .execute();
    return response;
  }
}
