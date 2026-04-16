import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Campaign } from '../../campaign/entities/campaign.entity';

@Entity('finances')
export class Finances {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  concepto: string; // Ejemplo: 'Alquiler de sede', 'Donación'

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
  })
  monto: number;

  @Column({
    type: 'enum',
    enum: ['ingreso', 'egreso'],
    default: 'egreso',
  })
  tipoMovimiento: string;

  @Column({ nullable: true })
  categoria: string; // Ejemplo: 'Publicidad', 'Transporte', 'Alimentación'

  @CreateDateColumn()
  fechaRegistro: Date;

  @Column({ type: 'text', nullable: true })
  observaciones: string;

  // Relacionamos el gasto a una campaña específica
  @ManyToOne(() => Campaign, { nullable: true })
  campaign: Campaign;

  // Quién registró el movimiento
  @ManyToOne(() => User, { nullable: true })
  registradoPor: User;
}