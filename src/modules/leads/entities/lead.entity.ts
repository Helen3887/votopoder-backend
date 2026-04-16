import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('leads')
export class Lead {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  fuente: string; // Ejemplo: 'Redes Sociales', 'Referido'

  @Column({ default: 'nuevo' })
  estado: string; // 'nuevo', 'contactado', 'convertido'

  @CreateDateColumn()
  fechaCaptacion: Date;
}