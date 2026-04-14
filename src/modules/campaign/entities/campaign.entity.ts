import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn } from 'typeorm';
import { Voter } from '../../voter/entities/voter.entity';

@Entity('campaigns')
export class Campaign {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column()
  partido: string;

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  presupuesto: number;

  @Column()
  candidato: string;

  @Column()
  municipio: string;

  @Column()
  adminUsuario: string;

  @Column()
  adminClave: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  // Relación: Una campaña tiene muchos votantes
  @OneToMany(() => Voter, (voter) => voter.campaign)
  voters: Voter[];
}