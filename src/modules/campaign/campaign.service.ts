import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Campaign } from './entities/campaign.entity';
import { CreateCampaignDto } from './dto/create-campaign.dto';

@Injectable()
export class CampaignService {
  constructor(
    @InjectRepository(Campaign)
    private readonly campaignRepository: Repository<Campaign>,
  ) {}

  async create(createCampaignDto: CreateCampaignDto): Promise<Campaign> {
    const newCampaign = this.campaignRepository.create(createCampaignDto);
    return await this.campaignRepository.save(newCampaign);
  }

  async findAll(): Promise<Campaign[]> {
    return await this.campaignRepository.find();
  }
}