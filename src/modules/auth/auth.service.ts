import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(loginDto: any) {
    const { usuario, clave } = loginDto;

    // Validación para el SuperAdmin (basado en tu VotoPoder v5.5)
    if (usuario === 'superadmin' && clave === 'votopoder2027') {
      const payload = { username: usuario, role: 'superadmin' };
      return {
        access_token: this.jwtService.sign(payload),
        user: {
          nombre: 'Sello Legal Admin',
          rol: 'superadmin'
        }
      };
    }

    // Aquí luego agregaremos la lógica para buscar administradores de campaña en la DB
    throw new UnauthorizedException('Credenciales incorrectas');
  }
}