import { Controller, Post, Get, Body } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Campañas')
@Controller('campaigns')
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva campaña (RegistroWizard)' })
  create(@Body() createCampaignDto: CreateCampaignDto) {
    return this.campaignService.create(createCampaignDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas las campañas' })
  findAll() {
    return this.campaignService.findAll();
  }
}