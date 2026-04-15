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
    // 1. Datos iniciales de ejemplo (puedes expandir esta lista)
    const data = [
      { nombre: 'Antioquia', nivel: 'departamento' },
      { nombre: 'Barbosa', nivel: 'municipio' },
      { nombre: 'Medellín', nivel: 'municipio' },
      { nombre: 'Bogotá', nivel: 'departamento' },
    ];

    // 2. Insertar solo si la tabla está vacía para evitar duplicados
    const count = await this.territoryRepository.count();
    if (count > 0) return { message: 'La base de datos ya tiene datos.' };

    await this.territoryRepository.save(data);
    return { message: 'Territorios cargados con éxito', total: data.length };
  }

  async findAll() {
    return await this.territoryRepository.find();
  }

  async findDetailsByName(nombre: string) {
    // Lógica para buscar detalles específicos
    return { nombre, info: 'Datos del DANE próximamente' };
  }
}