import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Size {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  type: string;
}
