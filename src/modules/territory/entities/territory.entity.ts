import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { TerritoryDetail } from './territory-detail.entity';

@Entity('territories')
export class Territory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  nivel: string; // 'departamento' o 'municipio'

  // --- ESTA ES LA LÍNEA QUE FALTA ---
  @OneToOne(() => TerritoryDetail, (detail) => detail.territory)
  detalle: TerritoryDetail;

  @ManyToOne(() => Territory, (territory) => territory.hijos, { nullable: true })
  padre: Territory;

  @OneToMany(() => Territory, (territory) => territory.padre)
  hijos: Territory[];
}