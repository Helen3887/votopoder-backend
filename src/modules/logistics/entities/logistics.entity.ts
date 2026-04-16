import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Campaign } from '../../campaign/entities/campaign.entity';

@Entity('logistics')
export class Logistics {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  actividad: string; // Ejemplo: 'Transporte de Testigos', 'Entrega de Refrigerios'

  @Column({ type: 'timestamp' })
  fechaProgramada: Date;

  @Column({ nullable: true })
  lugarPuntoPartida: string;

  @Column({ nullable: true })
  lugarDestino: string;

  @Column({
    type: 'enum',
    enum: ['pendiente', 'en_progreso', 'completada', 'cancelada'],
    default: 'pendiente',
  })
  estado: string;

  @Column({ type: 'text', nullable: true })
  requerimientosEspeciales: string; // Ejemplo: 'Necesita camioneta 4x4'

  @CreateDateColumn()
  createdAt: Date;

  // Responsable de la operación logística
  @ManyToOne(() => User, { nullable: true })
  responsable: User;

  // Campaña a la que pertenece el gasto logístico
  @ManyToOne(() => Campaign, { nullable: true })
  campaign: Campaign;
}