import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Material {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;
}
