import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('territories')
export class Territory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  department: string;

  @Column('jsonb') // Aquí guardamos el objeto de barrios/veredas
  zones: {
    barrios: string[];
    veredas: string[];
  };

  @Column('float', { nullable: true })
  latitude: number;

  @Column('float', { nullable: true })
  longitude: number;
}