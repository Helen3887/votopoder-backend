import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Territory } from './territory.entity';

@Entity('territory_details_new')
export class TerritoryDetail {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  descripcion: string;

  @OneToOne(() => Territory, (territory) => territory.detalle)
  @JoinColumn({ name: 'territoryId' })
  territory: Territory;

  @Column({ type: 'uuid' })
  territoryId: string;
}