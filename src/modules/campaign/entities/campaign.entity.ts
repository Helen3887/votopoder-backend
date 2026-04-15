import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('campaigns')
export class Campaign {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  candidato: string;

  @Column()
  adminUsuario: string;

  @Column()
  adminClave: string;

  // Cambiamos la relación para que no dependa de la importación directa
  @OneToMany('Voter', 'campaign') 
  voters: any[];
}