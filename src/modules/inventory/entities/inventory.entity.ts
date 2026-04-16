import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity('inventory')
export class Inventory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  articulo: string; // Ejemplo: 'Vallas publicitarias', 'Camisetas talla L'

  @Column({ type: 'int', default: 0 })
  stockTotal: number;

  @Column({ type: 'int', default: 0 })
  stockDisponible: number;

  @Column({ nullable: true })
  unidadMedida: string; // Ejemplo: 'Unidades', 'Metros', 'Kilos'

  @Column({ nullable: true })
  bodegaUbicacion: string; // Ejemplo: 'Sede Central', 'Garaje 1'

  @Column({ type: 'text', nullable: true })
  notas: string;

  @CreateDateColumn()
  fechaRegistro: Date;

  @UpdateDateColumn()
  ultimaModificacion: Date;

  // Relacionamos quién es el responsable de este lote de inventario
  @ManyToOne(() => User, { nullable: true })
  encargado: User;
}
