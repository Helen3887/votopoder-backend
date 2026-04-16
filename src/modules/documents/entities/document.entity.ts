import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity('documents')
export class Document {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombreArchivo: string;

  @Column()
  url: string; // Ruta del archivo (Local o Cloud)

  @Column()
  tipoDocumento: string; // Ejemplo: 'Cedula', 'Acta', 'Contrato'

  @Column({ nullable: true })
  extension: string; // .pdf, .jpg, .docx

  @CreateDateColumn()
  fechaSubida: Date;

  // Relación opcional para saber quién subió el archivo
  @ManyToOne(() => User, { nullable: true })
  subidoPor: User;
}