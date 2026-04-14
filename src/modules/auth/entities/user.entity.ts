import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from '../../../common/constants/enums';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column({ unique: true })
  usuario: string; // El 'username' para el login

  @Column()
  clave: string; // Se guardará encriptada

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.DIGITADOR,
  })
  rol: UserRole;

  @Column({ nullable: true })
  liderId: string; // Para saber qué líder trajo a qué usuario
}