import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Territory } from './entities/territory.entity';

@Injectable()
export class TerritoryService {
  constructor(
    @InjectRepository(Territory)
    private readonly territoryRepository: Repository<Territory>,
  ) {}

  async create(data: any) {
    const newTerritory = this.territoryRepository.create(data);
    return await this.territoryRepository.save(newTerritory);
  }

  async findAll() {
    return await this.territoryRepository.find();
  }
}