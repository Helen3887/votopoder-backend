import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('security_config')
export class Security {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: true })
  mfaEnabled: boolean;

  @Column({ type: 'int', default: 3 })
  maxLoginAttempts: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn() // Ahora ya no dará error porque lo importamos arriba
  updatedAt: Date;
}