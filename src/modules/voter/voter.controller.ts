import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { VoterService } from './voter.service';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';

@ApiTags('Votantes (CRM)')
@Controller('voters')
export class VoterController {
  constructor(private readonly voterService: VoterService) {}

  @Post()
  @ApiOperation({ summary: 'Registrar un nuevo votante' })
  // Esta línea obligará a Swagger a mostrar el cuadro blanco:
  @ApiBody({ 
    schema: {
      type: 'object',
      properties: {
        cedula: { type: 'string', example: '10203040' },
        nombreCompleto: { type: 'string', example: 'Juan David Barbosa' },
        telefono: { type: 'string', example: '3105551234' },
        direccion: { type: 'string', example: 'Calle Principal #10-20' },
        barrioVereda: { type: 'string', example: 'Centro' },
        campaignId: { type: 'string', example: 'ID_DE_TU_CAMPAÑA' }
      }
    }
  })
  create(@Body() data: any) {
    return this.voterService.create(data);
  }

  @Get('campaign/:campaignId')
  @ApiOperation({ summary: 'Listar votantes de una campaña' })
  findByCampaign(@Param('campaignId') campaignId: string) {
    return this.voterService.findByCampaign(campaignId);
  }
}