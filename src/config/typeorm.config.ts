import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Admin', 
  database: 'votopoder',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
dropSchema: false, // Ya lo hicimos manual en el paso 2, así que déjalo en false
logging: false,    // Apágalo para que no se enloquezca la terminal
};