import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Source {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;
}
