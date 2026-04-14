import { IsString, IsEnum, IsNotEmpty, MinLength } from 'class-validator';
import { PoliticalAffiliation } from '../../../common/constants/enums';

export class CreateCampaignDto {
  @IsString()
  @IsNotEmpty()
  candidato: string;

  @IsEnum(PoliticalAffiliation)
  partido: PoliticalAffiliation;

  @IsString()
  @IsNotEmpty()
  municipio: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  adminUsuario: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  adminClave: string;
}