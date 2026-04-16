import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('audit_logs')
export class Audit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  accion: string;

  @CreateDateColumn()
  fecha: Date;
}