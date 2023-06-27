import { Injectable } from '@nestjs/common';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Publisher } from './entities/publisher.entity';

@Injectable()
export class PublishersService {
  constructor(
    @InjectRepository(Publisher)
    private readonly publisherRepository: Repository<Publisher>,
  ) {}

  create(createPublisherDto: CreatePublisherDto) {
    const newPublisher = this.publisherRepository.create(createPublisherDto);
    return this.publisherRepository.save(newPublisher);
  }

  findAll() {
    return this.publisherRepository.find();
  }

  findOne(id: number) {
    return this.publisherRepository.findOneBy({ id });
  }

  update(id: number, updatePublisherDto: UpdatePublisherDto) {
    return `This action updates a #${id} publisher`;
  }

  async remove(id: number) {
    await this.publisherRepository.delete(id);
  }
}
