import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('witnesses')
export class Witnesses {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  cedula: string;

  @Column()
  puestoAsignado: string;

  @Column({ default: false })
  asistenciaConfirmada: boolean;
}