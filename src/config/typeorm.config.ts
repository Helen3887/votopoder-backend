import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres', 
  host: 'localhost',
  port: 5432,
  username: 'postgres', // Cambia por tu usuario de DB
  password: 'Admin',    // Cambia por tu contraseña de DB
  database: 'votopoder',
  autoLoadEntities: true,
  synchronize: true, // Esto crea las tablas automáticamente en desarrollo
};