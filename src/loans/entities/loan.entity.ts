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
  bookId: number;

  @Column({
    type: 'int',
    name: 'user_id',
  })
  userId: number;

  @Column({
    type: 'date',
    name: 'loan_date',
  })
  loanDate: Date;

  @Column({
    type: 'date',
    name: 'return_date',
  })
  returnDate: Date;

  @Column({
    type: 'boolean',
    name: 'returned',
  })
  returned: boolean;
}
