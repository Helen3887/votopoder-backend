import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('reports')
export class Reports {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombreReporte: string;

  @Column()
  tipo: string; // 'PDF', 'EXCEL'

  @Column()
  generadoPor: string;

  @CreateDateColumn()
  fechaGeneracion: Date;
}