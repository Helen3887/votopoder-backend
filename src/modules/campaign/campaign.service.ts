import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Campaign } from './entities/campaign.entity';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CampaignService {
  constructor(
    @InjectRepository(Campaign)
    private campaignRepo: Repository<Campaign>,
  ) {}

  async create(createCampaignDto: CreateCampaignDto) {
    const exists = await this.campaignRepo.findOne({
      where: { adminUsuario: createCampaignDto.adminUsuario }
    });
    
    if (exists) throw new ConflictException('El usuario de administrador ya existe');

    const hashedPassword = await bcrypt.hash(createCampaignDto.adminClave, 10);
    
    const newCampaign = this.campaignRepo.create({
      ...createCampaignDto,
      adminClave: hashedPassword,
    });

    return await this.campaignRepo.save(newCampaign);
  }

  a// Busca el método findAll y cámbialo a esto:
async findAll() {
  return await this.campaignRepo.find({ 
    order: { nombre: 'ASC' } // Cambiamos createdAt por nombre
  });
}
}