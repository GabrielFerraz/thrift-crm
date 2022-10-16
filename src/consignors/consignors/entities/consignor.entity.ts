import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Consignor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  code: string;
}
