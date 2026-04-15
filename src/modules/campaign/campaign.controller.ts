import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common'; // Agregamos UseGuards
import { CampaignService } from './campaign.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'; // Importación vital

@ApiTags('Campañas')
@Controller('campaigns')
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva campaña (RegistroWizard)' })
  create(@Body() createCampaignDto: CreateCampaignDto) {
    return this.campaignService.create(createCampaignDto);
  }

  @UseGuards(JwtAuthGuard) // Ahora sí funcionará porque importamos UseGuards y JwtAuthGuard
  @Get()
  @ApiOperation({ summary: 'Listar todas las campañas (Protegido con JWT)' })
  findAll() {
    return this.campaignService.findAll();
  }
}