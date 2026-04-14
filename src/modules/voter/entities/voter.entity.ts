import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Campaign } from '../../campaign/entities/campaign.entity';

@Entity('voters')
export class Voter {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cedula: string;

  @Column()
  nombreCompleto: string;

  @Column({ nullable: true })
  telefono: string;

  @Column({ nullable: true })
  direccion: string;

  @Column({ nullable: true })
  barrioVereda: string;

  @Column({ nullable: true })
  puestoVotacion: string;

  @Column({ nullable: true })
  mesa: string;

  @Column({ default: 'Pendiente' })
  estado: string;

  @Column({ nullable: true })
  intencionVoto: string;

  @CreateDateColumn() // <-- Esta línea soluciona el error de 'createdAt'
  createdAt: Date;

  @ManyToOne(() => Campaign, (campaign) => campaign.voters)
  campaign: Campaign;
}