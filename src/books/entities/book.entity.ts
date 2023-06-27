import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
    name: 'title',
  })
  title: string;

  @Column({
    type: 'varchar',
    length: 255,
    name: 'author',
  })
  author: string;

  @Column({
    type: 'varchar',
    length: 255,
    name: 'publisher',
  })
  publisher: string;

  @Column({
    type: 'varchar',
    length: 255,
    name: 'genre',
  })
  genre: string;

  @Column({
    type: 'varchar',
    length: 255,
    name: 'description',
  })
  description: string;

  @Column({
    type: 'date',
    name: 'published_date',
  })
  published_date: Date;

  @Column({
    type: 'int',
    name: 'disponibility',
  })
  disponibility: number;
}
