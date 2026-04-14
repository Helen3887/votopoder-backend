import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombreCompleto: string;

  @Column({ unique: true })
  usuario: string;

  @Column({ unique: true, nullable: true })
  email: string;

  @Column()
  clave: string;

  @Column({ default: 'admin' })
  rol: string;

  @CreateDateColumn()
  createdAt: Date;
}