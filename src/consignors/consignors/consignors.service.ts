import { Inject, Injectable } from '@nestjs/common';
import { CreateConsignorDto } from './dto/create-consignor.dto';
import { UpdateConsignorDto } from './dto/update-consignor.dto';
import { Connection, Repository } from 'typeorm';
import { Consignor } from './entities/consignor.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ConsignorsService {
  constructor(
    @InjectRepository(Consignor)
    private repo: Repository<Consignor>,
  ) {}

  create(createConsignorDto: CreateConsignorDto) {
    const response = this.repo
      .createQueryBuilder()
      .insert()
      .into(Consignor)
      .values(createConsignorDto)
      .execute();
    return response;
  }

  findAll() {
    const response = this.repo
      .createQueryBuilder()
      .select('*')
      .from(Consignor, 'consignors')
      .execute();
    return response;
  }

  findOne(id: number) {
    const response = this.repo
      .createQueryBuilder()
      .select('*')
      .from(Consignor, 'consignors')
      .where({
        id,
      })
      .execute();
    return response;
  }

  update(id: number, updateConsignorDto: UpdateConsignorDto) {
    const response = this.repo
      .createQueryBuilder()
      .update(Consignor)
      .set(UpdateConsignorDto)
      .where('id = :id', { id })
      .execute();
    return response;
  }

  remove(id: number) {
    const response = this.repo
      .createQueryBuilder()
      .delete()
      .from(Consignor)
      .where('id = :id', { id })
      .execute();
    return response;
  }
}
