import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Territory } from '../../territory/entities/territory.entity';
import { Campaign } from '../../campaign/entities/campaign.entity'; // Asegúrate de que esta ruta sea correcta

@Entity('voters')
export class Voter {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  cedula: string;

  @Column()
  nombreCompleto: string;

  @Column({ nullable: true })
  telefono: string;

  @Column({ default: false })
  yaVoto: boolean;

  @ManyToOne(() => Territory, { nullable: false })
  municipio: Territory;

  // SOLUCIÓN AL ERROR 1: Definimos la relación con Campaign
  @ManyToOne(() => Campaign, (campaign) => campaign.voters, { nullable: false })
  campaign: Campaign;

  // SOLUCIÓN AL ERROR 3: Usamos 'createdAt' para que coincida con el Service
  @CreateDateColumn()
  createdAt: Date; 
}