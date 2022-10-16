import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PaymentMethod {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  fee: number;
}
