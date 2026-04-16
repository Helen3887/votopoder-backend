import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('polling_stations')
export class PollingStation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombrePuesto: string;

  @Column()
  direccion: string;

  @Column({ type: 'int', default: 0 })
  totalMesas: number;
}
