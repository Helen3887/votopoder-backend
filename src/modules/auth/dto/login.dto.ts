import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'superadmin' })
  @IsString()
  @IsNotEmpty()
  usuario: string;

  @ApiProperty({ example: 'votopoder2027' })
  @IsString()
  @IsNotEmpty()
  clave: string;
}