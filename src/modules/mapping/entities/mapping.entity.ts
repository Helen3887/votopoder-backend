import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity('mapping_locations')
export class Mapping {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombrePunto: string; // Ejemplo: 'Sede Comuna 4', 'Puesto Votación Escuela X'

  @Column({
    type: 'enum',
    enum: ['sede', 'puesto_votacion', 'punto_concentracion', 'publicidad_exterior'],
    default: 'puesto_votacion',
  })
  tipoLugar: string;

  // Coordenadas con precisión para Google Maps o Leaflet
  @Column({ type: 'decimal', precision: 10, scale: 8 })
  latitud: number;

  @Column({ type: 'decimal', precision: 11, scale: 8 })
  longitud: number;

  @Column({ nullable: true })
  direccion: string;

  @Column({ type: 'text', nullable: true })
  observaciones: string;

  @CreateDateColumn()
  fechaRegistro: Date;

  // Usuario que registró las coordenadas
  @ManyToOne(() => User, { nullable: true })
  registradoPor: User;
}