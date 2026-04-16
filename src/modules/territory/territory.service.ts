import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Territory } from './entities/territory.entity';

@Injectable()
export class TerritoryService {
  constructor(
    @InjectRepository(Territory)
    private readonly territoryRepository: Repository<Territory>,
  ) {}

  async seed() {
    const count = await this.territoryRepository.count();
    if (count > 0) return { message: 'La base de datos ya tiene datos.' };

    // 1. Creamos los departamentos (Padres)
    const antioquia = await this.territoryRepository.save({ 
      nombre: 'Antioquia', 
      nivel: 'departamento' 
    });

    const bogota = await this.territoryRepository.save({ 
      nombre: 'Bogotá', 
      nivel: 'departamento' 
    });

    // 2. Creamos los municipios asociándolos a sus padres
    const municipios = [
      { nombre: 'Barbosa', nivel: 'municipio', parent: antioquia },
      { nombre: 'Medellín', nivel: 'municipio', parent: antioquia },
      { nombre: 'Bello', nivel: 'municipio', parent: antioquia },
      { nombre: 'Bosa', nivel: 'municipio', parent: bogota },
      { nombre: 'Chapinero', nivel: 'municipio', parent: bogota },
    ];

    await this.territoryRepository.save(municipios);
    return { message: 'Relaciones territoriales cargadas con éxito' };
  }

  async findAll() {
    return await this.territoryRepository.find({ relations: ['parent'] });
  }

  async findMunicipiosByDepartamento(nombreDepto: string) {
    // Buscamos el departamento primero
    const depto = await this.territoryRepository.findOne({
      where: { nombre: nombreDepto, nivel: 'departamento' }
    });

    if (!depto) return [];

    // Buscamos hijos cuyo parent sea el depto encontrado
    return await this.territoryRepository.find({
      where: { parent: { id: depto.id } },
      order: { nombre: 'ASC' }
    });
  }

  async findDetailsByName(nombre: string) {
    return await this.territoryRepository.findOne({ where: { nombre } });
  }
}