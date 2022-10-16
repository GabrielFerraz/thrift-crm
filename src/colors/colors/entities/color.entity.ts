import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Color {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  code: string;
}
