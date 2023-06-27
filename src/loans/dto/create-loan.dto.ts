import { IsBoolean, IsDate, IsInt, IsNotEmpty } from 'class-validator';

export class CreateLoanDto {
  @IsInt()
  @IsNotEmpty()
  bookId: number;

  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsDate()
  @IsNotEmpty()
  loanDate: Date;

  @IsDate()
  @IsNotEmpty()
  returnDate: Date;

  @IsBoolean()
  @IsNotEmpty()
  returned: boolean;
}
