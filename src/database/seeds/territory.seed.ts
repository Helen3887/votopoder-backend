import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Territory } from '../entities/territory.entity';

@Injectable()
export class TerritorySeed implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(Territory)
    private readonly territoryRepo: Repository<Territory>,
  ) {}

  async onApplicationBootstrap() {
    const count = await this.territoryRepo.count();
    if (count === 0) {
      await this.territoryRepo.save({
        name: 'Barbosa',
        department: 'Antioquia',
        zones: {
          barrios: ['Centro', 'Buenos Aires', 'El Progreso', 'Portón', 'La Estación', 'El Cortado'],
          veredas: ['La Quiebra', 'El Hatillo', 'Platanito', 'Popalito', 'Dos Quebradas', 'Yarumito'],
        },
        latitude: 6.438,
        longitude: -75.331,
      });
      console.log('✅ Base de datos: Información de Barbosa cargada con éxito.');
    }
  }
}