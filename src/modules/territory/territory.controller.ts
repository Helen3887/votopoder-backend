import { Controller, Get, Post, Param, Query } from '@nestjs/common'; // Agregamos Post
import { TerritoryService } from './territory.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('territories')
@Controller('territories')
export class TerritoryController {
  constructor(private readonly territoryService: TerritoryService) {}

  // 👇 ESTE ES EL BLOQUE QUE NECESITAS AGREGAR
  @Post('seed')
  @ApiOperation({ summary: 'Cargar departamentos y municipios iniciales en la DB' })
  async seed() {
    return await this.territoryService.seed();
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos los territorios (filtrable por nivel)' })
  findAll(@Query('nivel') nivel?: string) {
    // Nota: Aquí podrías pasar el 'nivel' al service si quieres filtrar
    return this.territoryService.findAll(); 
  }

  @Get('details/:municipioNombre')
  @ApiOperation({ summary: 'Obtener estadísticas DANE/CNE de un municipio' })
  async getDetails(@Param('municipioNombre') nombre: string) {
    return await this.territoryService.findDetailsByName(nombre);
  }
}