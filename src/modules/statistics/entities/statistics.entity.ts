import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Campaign } from '../../campaign/entities/campaign.entity';

@Entity('statistics_metrics')
export class Statistics {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombreMetrica: string; // Ejemplo: 'Votos Objetivo', 'Censo Electoral Local'

  @Column({ type: 'float', default: 0 })
  valorActual: number;

  @Column({ type: 'float', default: 0 })
  metaObjetivo: number;

  @Column({
    type: 'enum',
    enum: ['porcentaje', 'cantidad_neta', 'promedio'],
    default: 'cantidad_neta',
  })
  tipoCalculo: string;

  @Column({ nullable: true })
  categoria: string; // Ejemplo: 'Votación', 'Finanzas', 'Logística'

  @UpdateDateColumn()
  ultimaActualizacion: Date;

  // Cada estadística pertenece a una campaña específica
  @ManyToOne(() => Campaign, { nullable: true })
  campaign: Campaign;
}