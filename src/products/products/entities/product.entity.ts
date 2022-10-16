import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'int' })
  category_id: number;

  @Column({ type: 'varchar' })
  code: string;

  @Column({ type: 'int' })
  brand_id: number;

  @Column({ type: 'int' })
  color_id: number;

  @Column({ type: 'int' })
  size_id: number;

  @Column({ type: 'int' })
  material_id: number;

  @Column({ type: 'int' })
  source_id: number;

  @Column({ type: 'int' })
  consignor_id: number;

  @Column({ type: 'decimal', precision: 6, scale: 2 })
  buy_price: number;

  @Column({ type: 'decimal', precision: 6, scale: 2 })
  sell_price: number;

  @Column({ type: 'int' })
  order_id: number;
}
