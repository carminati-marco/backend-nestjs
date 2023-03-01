import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  object: string;

  @Column({ nullable: true })
  picture: string;

  @Column({ nullable: true })
  link: string;

  // type
  @Column()
  description: string;

  @Column({ default: 0 })
  price: number;

  @Column({ default: 0 })
  discount: number;
}
