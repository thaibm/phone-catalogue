import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Phone {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  color: string;

  @Column()
  manufacturer: string;

  @Column()
  imageFileName: string;

  @Column()
  screen: string;

  @Column()
  processor: string;

  @Column()
  ram: string;
}
