import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'datetime' })
  date: string;

  @Column({ type: 'decimal', precision: 6, scale: 2 })
  amount: number;

  @Column({ type: 'text' })
  description: string;
}
