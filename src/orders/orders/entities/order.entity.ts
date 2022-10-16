import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'datetime' })
  date: string;

  @Column({ type: 'varchar' })
  location: string;

  @Column({ type: 'int' })
  payment_method_id: number;

  @Column({ type: 'decimal', precision: 6, scale: 2 })
  total: number;

  @Column({ type: 'decimal', precision: 6, scale: 2 })
  discount: number;

  @Column({ type: 'decimal', precision: 6, scale: 2 })
  subtotal: number;
}
