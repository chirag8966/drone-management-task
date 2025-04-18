import { Injectable } from '@nestjs/common';
import { CreateStatDto } from './dto/create-stat.dto';
import { UpdateStatDto } from './dto/update-stat.dto';
import { Repository } from 'typeorm';
import { Stat } from './entities/stat.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StatsService {

  constructor(
    @InjectRepository(Stat)
    private readonly statsRepository: Repository<Stat>) {}

  async create(createStatDto: CreateStatDto) {
    const stat = this.statsRepository.create(createStatDto);
    return await this.statsRepository.save(stat);
  }

  async findAll() {
    return await this.statsRepository.find({
      order: { id: 'ASC' }
    });
  }

  async findOne(id: number) {
    return await this.statsRepository.findOne({ where: { id } });
  }

  async update(id: number, updateStatDto: UpdateStatDto) {
    return await this.statsRepository.update(id, updateStatDto);
  }

  async remove(id: number) {
    return await this.statsRepository.delete(id);
  }
}
