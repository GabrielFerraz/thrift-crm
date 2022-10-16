import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Config {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  value: string;
}
