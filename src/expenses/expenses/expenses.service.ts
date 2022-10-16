import { Inject, Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { Connection, Repository } from 'typeorm';
import { Expense } from './entities/expense.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectRepository(Expense)
    private repo: Repository<Expense>,
  ) {}

  create(createExpenseDto: CreateExpenseDto) {
    const response = this.repo
      .createQueryBuilder()
      .insert()
      .into(Expense)
      .values(createExpenseDto)
      .execute();
    return response;
  }

  findAll() {
    const response = this.repo
      .createQueryBuilder()
      .select('*')
      .from(Expense, 'expenses')
      .execute();
    return response;
  }

  findOne(id: number) {
    const response = this.repo
      .createQueryBuilder()
      .select('*')
      .from(Expense, 'expenses')
      .where({
        id,
      })
      .execute();
    return response;
  }

  update(id: number, updateExpenseDto: UpdateExpenseDto) {
    const response = this.repo
      .createQueryBuilder()
      .update(Expense)
      .set(UpdateExpenseDto)
      .where('id = :id', { id })
      .execute();
    return response;
  }

  remove(id: number) {
    const response = this.repo
      .createQueryBuilder()
      .delete()
      .from(Expense)
      .where('id = :id', { id })
      .execute();
    return response;
  }
}
