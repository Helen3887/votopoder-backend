import { Controller, Post, Body, Get } from '@nestjs/common';
import { TerritoryService } from './territory.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Territorio (Barbosa)')
@Controller('territory')
export class TerritoryController {
  constructor(private readonly territoryService: TerritoryService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo barrio o vereda' })
  create(@Body() data: any) {
    return this.territoryService.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos los sectores' })
  findAll() {
    return this.territoryService.findAll();
  }
}