import { Inject, Injectable } from '@nestjs/common';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';
import { Connection, Repository } from 'typeorm';
import { Material } from './entities/material.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MaterialsService {
  constructor(
    @InjectRepository(Material)
    private repo: Repository<Material>,
  ) {}

  create(createMaterialDto: CreateMaterialDto) {
    const response = this.repo
      .createQueryBuilder()
      .insert()
      .into(Material)
      .values(createMaterialDto)
      .execute();
    return response;
  }

  findAll() {
    const response = this.repo
      .createQueryBuilder()
      .select('*')
      .from(Material, 'materials')
      .execute();
    return response;
  }

  findOne(id: number) {
    const response = this.repo
      .createQueryBuilder()
      .select('*')
      .from(Material, 'materials')
      .where({
        id,
      })
      .execute();
    return response;
  }

  update(id: number, updateMaterialDto: UpdateMaterialDto) {
    const response = this.repo
      .createQueryBuilder()
      .update(Material)
      .set(UpdateMaterialDto)
      .where('id = :id', { id })
      .execute();
    return response;
  }

  remove(id: number) {
    const response = this.repo
      .createQueryBuilder()
      .delete()
      .from(Material)
      .where('id = :id', { id })
      .execute();
    return response;
  }
}
