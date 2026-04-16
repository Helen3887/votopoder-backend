import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('pqrs')
export class Pqr {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  remitente: string;

  @Column('text')
  asunto: string;

  @Column({ default: 'abierto' })
  estado: string; // 'abierto', 'cerrado', 'en_tramite'

  @CreateDateColumn()
  createdAt: Date;
}