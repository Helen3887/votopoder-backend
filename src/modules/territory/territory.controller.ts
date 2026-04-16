import { Controller, Get, Post, Param, Query } from '@nestjs/common';
import { TerritoryService } from './territory.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('territories')
@Controller('territories')
export class TerritoryController {
  constructor(private readonly territoryService: TerritoryService) {}

  @Post('seed')
  @ApiOperation({ summary: 'Cargar departamentos y municipios con jerarquía' })
  async seed() {
    return await this.territoryService.seed();
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos los territorios' })
  findAll() {
    return this.territoryService.findAll(); 
  }

  @Get('municipios/:departamentoNombre')
  @ApiOperation({ summary: 'Listar municipios de un departamento' })
  async getMunicipiosByDepto(@Param('departamentoNombre') nombre: string) {
    return await this.territoryService.findMunicipiosByDepartamento(nombre);
  }

  @Get('details/:municipioNombre')
  @ApiOperation({ summary: 'Obtener ficha técnica de un municipio' })
  async getDetails(@Param('municipioNombre') nombre: string) {
    return await this.territoryService.findDetailsByName(nombre);
  }
}