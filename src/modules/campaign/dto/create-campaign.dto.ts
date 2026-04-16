import { IsString, IsNotEmpty, IsOptional, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCampaignDto {
  @ApiProperty({ example: 'Campaña Electoral 2026' })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({ example: 'Candidato Ejemplo' })
  @IsString()
  @IsNotEmpty()
  candidato: string;

  @ApiProperty({ example: 'admin_user' })
  @IsString()
  @IsNotEmpty()
  adminUsuario: string;

  @ApiProperty({ example: 'clave123' })
  @IsString()
  @IsNotEmpty()
  adminClave: string;

  @ApiProperty({ example: '2026-04-15' })
  @IsDateString() // Importante para que acepte el formato de fecha
  @IsNotEmpty()
  fechaInicio: string;

  @ApiProperty({ example: 'Descripción opcional', required: false })
  @IsString()
  @IsOptional()
  descripcion?: string;
}