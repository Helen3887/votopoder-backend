import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto'; // Verifica que la ruta sea correcta

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    // El error ocurría aquí porque loginDto llegaba undefined
    return this.authService.login(loginDto.usuario, loginDto.clave);
  }
}