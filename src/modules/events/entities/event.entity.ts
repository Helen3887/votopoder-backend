import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('events')
export class Events {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  titulo: string;

  @Column({ type: 'timestamp' })
  fechaEvento: Date;

  @Column()
  lugar: string;

  @Column({ type: 'int', default: 0 })
  asistentesEsperados: number;
}