import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('messages')
export class Messaging {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  destinatario: string;

  @Column()
  contenido: string;

  @Column()
  estado: string; // 'ENVIADO', 'FALLIDO'

  @CreateDateColumn()
  sentAt: Date;
}