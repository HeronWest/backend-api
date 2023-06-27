import { Module } from '@nestjs/common';
import { PublishersService } from './publishers.service';
import { PublishersController } from './publishers.controller';
import { Publisher } from './entities/publisher.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Publisher])],
  exports: [TypeOrmModule],
  controllers: [PublishersController],
  providers: [PublishersService],
})
export class PublishersModule {}
