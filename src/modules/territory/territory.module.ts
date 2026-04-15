import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TerritoryService } from './territory.service';
import { TerritoryController } from './territory.controller';
import { Territory } from './entities/territory.entity';
import { TerritoryDetail } from './entities/territory-detail.entity'; // Importación clave

@Module({
  imports: [TypeOrmModule.forFeature([Territory, TerritoryDetail])],
  controllers: [TerritoryController],
  providers: [TerritoryService],
  exports: [TerritoryService],
})
export class TerritoryModule {} // Solo una vez