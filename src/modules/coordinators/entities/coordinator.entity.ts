import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('coordinators')
export class Coordinator {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  zonaAsignada: string;

  @Column({ unique: true })
  telefono: string;
}