import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { TerritoryDetail } from './territory-detail.entity'; // Asegúrate de que el nombre del archivo sea correcto

@Entity('territories new')
export class Territory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  nivel: string; // 'departamento' o 'municipio'

  // 👇 AGREGA ESTA RELACIÓN (El "enchufe" que faltaba)
  @OneToOne(() => TerritoryDetail, (detail) => detail.territory)
  detalle: TerritoryDetail;

  @ManyToOne(() => Territory, (territory) => territory.children, { nullable: true })
  parent: Territory;

  @OneToMany(() => Territory, (territory) => territory.parent)
  children: Territory[];

  @Column({ type: 'json', nullable: true })
  metadata: any;
}