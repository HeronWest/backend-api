import { Injectable } from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Loan } from './entities/loan.entity';

@Injectable()
export class LoansService {
  constructor(
    @InjectRepository(Loan) private readonly loanRepository: Repository<Loan>,
  ) {}

  create(createLoanDto: CreateLoanDto): Promise<Loan> {
    const newLoan = this.loanRepository.create(createLoanDto);
    return this.loanRepository.save(newLoan);
  }

  findAll() {
    return this.loanRepository.find();
  }

  findOne(id: number) {
    return this.loanRepository.findOneBy({ id });
  }

  update(id: number, updateLoanDto: UpdateLoanDto) {
    return `This action updates a #${id} loan`;
  }

  async remove(id: number) {
    await this.loanRepository.delete(id);
  }
}
