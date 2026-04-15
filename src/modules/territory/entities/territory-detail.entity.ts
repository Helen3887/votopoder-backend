import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Territory } from './territory.entity';

@Entity('territory_details')
export class TerritoryDetail {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  daneCode: string;

  @Column({ type: 'int', default: 0 })
  poblacionTotal: number;

  @Column({ type: 'int', default: 0, nullable: true })
  poblacionUrbana: number;

  @Column({ type: 'int', default: 0, nullable: true })
  poblacionRural: number;

  @Column({ type: 'int', default: 0 })
  censoElectoral: number;

  @Column({ nullable: true })
  temperaturaPromedio: string;

  @Column({ type: 'int', default: 0, nullable: true })
  barriosCount: number;

  @Column({ type: 'int', default: 0, nullable: true })
  veredasCount: number;

  // Relación 1:1 con la tabla Territory (Municipio)
  @OneToOne(() => Territory, (territory) => territory.detalle, { onDelete: 'CASCADE' })
  @JoinColumn()
  territory: Territory;
}