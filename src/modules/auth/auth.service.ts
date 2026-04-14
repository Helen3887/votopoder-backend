import { Injectable, UnauthorizedException, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService implements OnModuleInit {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async onModuleInit() {
    // Agregamos un pequeño retraso de 2 segundos para dar tiempo a que TypeORM cree la tabla
    await new Promise(resolve => setTimeout(resolve, 2000));

    try {
      const adminExists = await this.userRepo.findOne({ 
        where: { usuario: 'superadmin' } 
      });
      
      if (!adminExists) {
        const hashedClave = await bcrypt.hash('votopoder2027', 10);
        
        const superAdmin = this.userRepo.create({
          nombreCompleto: 'Administrador Global',
          usuario: 'superadmin',
          clave: hashedClave,
          rol: 'superadmin',
          email: 'admin@votopoder.com'
        });

        await this.userRepo.save(superAdmin);
        console.log('👤 Usuario SuperAdmin creado: superadmin / votopoder2027');
      }
    } catch (error) {
      console.error('⏳ Esperando a que la base de datos se sincronice...');
    }
  }

  async login(usuario: string, clave: string) {
    const user = await this.userRepo.findOne({ where: { usuario } });
    if (!user) throw new UnauthorizedException('Usuario no existe');

    const isMatch = await bcrypt.compare(clave, user.clave);
    if (!isMatch) throw new UnauthorizedException('Clave incorrecta');

    const payload = { sub: user.id, rol: user.rol, nombre: user.nombreCompleto };
    return {
      access_token: this.jwtService.sign(payload),
      user: payload,
    };
  }
}