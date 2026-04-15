import { IsString, IsNotEmpty, IsOptional, IsUUID, IsEmail } from 'class-validator';

export class CreateVoterDto {
  @IsString()
  @IsNotEmpty()
  cedula: string;

  @IsString()
  @IsNotEmpty()
  nombreCompleto: string;

  @IsString()
  @IsOptional()
  telefono: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  barrioVereda: string;

  @IsUUID()
  @IsNotEmpty()
  municipioId: string;

  @IsUUID()
  @IsNotEmpty()
  campaignId: string;

  @IsString()
  @IsOptional()
  liderId: string; // Para la red de referidos
}