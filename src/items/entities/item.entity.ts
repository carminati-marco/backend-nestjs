import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  object: string;

  @Column()
  picture: string;

  @Column()
  link: string;

  // type
  @Column()
  description: string;

  @Column()
  price: number;

  @Column({ default: 0 })
  discount: number;

  // Stanza	Oggetto	Foto	Tipo	Descrizione	Prezzo	Sconto	Prezzo scontato	Quantità	Totale	Marca	Link
}
