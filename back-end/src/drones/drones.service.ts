import { Injectable } from '@nestjs/common';
import { CreateDroneDto } from './dto/create-drone.dto';
import { UpdateDroneDto } from './dto/update-drone.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Drone } from './entities/drone.entity';

@Injectable()
export class DronesService {
  constructor(
    @InjectRepository(Drone)
    private readonly dronesRepository: Repository<Drone>) { }

  async create(createDroneDto: CreateDroneDto) {
    const drone = this.dronesRepository.create(createDroneDto);
    return await this.dronesRepository.save(drone);
  }

  async findAll() {
    return await this.dronesRepository.find();
  }

  async findOne(id: number) {
    return await this.dronesRepository.findOne({ where: { id } });
  }

  async update(id: number, updateDroneDto: UpdateDroneDto) {
    return await this.dronesRepository.update(id, updateDroneDto);
  }

  async remove(id: number) {
    return await this.dronesRepository.delete(id);
  }
}
