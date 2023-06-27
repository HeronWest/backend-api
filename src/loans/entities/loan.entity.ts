import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Loan {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @Column({
    type: 'int',
    name: 'book_id',
  })
  book_id: number;

  @Column({
    type: 'int',
    name: 'user_id',
  })
  user_id: number;

  @Column({
    type: 'date',
    name: 'loan_date',
  })
  loan_date: Date;

  @Column({
    type: 'date',
    name: 'return_date',
  })
  return_date: Date;
}
