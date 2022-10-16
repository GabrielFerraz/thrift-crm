import { Inject, Injectable } from '@nestjs/common';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { UpdateAdjustmentDto } from './dto/update-adjustment.dto';
import { Connection, Repository } from 'typeorm';
import { Adjustment } from './entities/adjustment.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AdjustmentsService {
  constructor(
    @InjectRepository(Adjustment)
    private repo: Repository<Adjustment>,
  ) {}

  create(createAdjustmentDto: CreateAdjustmentDto) {
    const response = this.repo
      .createQueryBuilder()
      .insert()
      .into(Adjustment)
      .values(createAdjustmentDto)
      .execute();
    return response;
  }

  findAll() {
    const response = this.repo
      .createQueryBuilder()
      .select('*')
      .from(Adjustment, 'adjustment')
      .execute();
    return response;
  }

  findOne(id: number) {
    const response = this.repo
      .createQueryBuilder()
      .select('*')
      .from(Adjustment, 'adjustment')
      .where({
        id,
      })
      .execute();
    return response;
  }

  update(id: number, updateAdjustmentDto: UpdateAdjustmentDto) {
    const response = this.repo
      .createQueryBuilder()
      .update(Adjustment)
      .set(UpdateAdjustmentDto)
      .where('id = :id', { id })
      .execute();
    return response;
  }

  remove(id: number) {
    const response = this.repo
      .createQueryBuilder()
      .delete()
      .from(Adjustment)
      .where('id = :id', { id })
      .execute();
    return response;
  }
}
