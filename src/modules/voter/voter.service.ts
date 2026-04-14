import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Voter } from './entities/voter.entity';

@Injectable()
export class VoterService {
  constructor(
    @InjectRepository(Voter)
    private readonly voterRepository: Repository<Voter>,
  ) {}

  async create(data: any) {
    const voter = this.voterRepository.create(data);
    return await this.voterRepository.save(voter);
  }

  // Método corregido
  async findByCampaign(campaignId: string) {
    return await this.voterRepository.find({
      where: { 
        campaign: { id: campaignId } // Corregido: se usa la relación
      },
      order: { 
        createdAt: 'DESC' // Ahora sí funcionará porque agregamos la columna
      }
    });
  }

  async findAll() {
    return await this.voterRepository.find({
      relations: ['campaign']
    });
  }
}