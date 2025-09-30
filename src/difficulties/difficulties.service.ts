import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Difficulty } from './entities/difficulty.entity';

@Injectable()
export class DifficultiesService {

  constructor(
    @InjectRepository(Difficulty) private readonly repository: Repository<Difficulty>,
  ) { }

  findAll() {
    return this.repository.find()
  }
}
