import { IsEmail, IsNotEmpty, IsString, MinLength, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Elena Barbosa' })
  @IsString()
  @IsNotEmpty()
  nombreCompleto: string;

  @ApiProperty({ example: 'elena@ejemplo.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Barbosa2026*', description: 'Mínimo 6 caracteres' })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 'admin', required: false })
  @IsString()
  @IsOptional()
  rol?: string;
}