import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Adjustment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'decimal', precision: 6, scale: 2 })
  cost: number;
}
