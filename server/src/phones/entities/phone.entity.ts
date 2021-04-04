import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Phone {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  avatarUrl: string;

  @Column()
  color: string;
  
  @Column()
  description: string;
  
  @Column()
  imageFileName: string;
 
  @Column() 
  manufacturer:  string;
  
  @Column() 
  name:  string;

  @Column() 
  price: number;

  @Column() 
  processor: string;

  @Column() 
  ram:  string;

  @Column() 
  screen:  string;
}
