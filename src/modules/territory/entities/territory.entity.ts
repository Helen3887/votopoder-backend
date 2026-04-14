import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Voter } from '../../voter/entities/voter.entity';

@Entity('territories')
export class Territory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column({ default: 'Barrio' }) // Puede ser 'Barrio' o 'Vereda'
  tipo: string;

  @OneToMany(() => Voter, (voter) => voter.barrioVereda)
  voters: Voter[];
}