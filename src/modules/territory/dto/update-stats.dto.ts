import { IsNumber, IsString, IsOptional } from 'class-validator';

export class UpdateStatsDto {
  @IsString()
  daneCode: string;

  @IsNumber()
  poblacionTotal: number;

  @IsNumber()
  censoElectoral: number;

  @IsString()
  @IsOptional()
  temperaturaPromedio: string;
}