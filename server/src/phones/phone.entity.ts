import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Phone {
  @PrimaryColumn()
  id: number;

  @Column()
  model: string;

  @Column()
  email: string;

  @Column()
  brand: string;

  @Column()
  year: number;
}
