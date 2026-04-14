import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

// Entidades - Verifica que estas rutas existan en tu carpetas
import { Territory } from './modules/territory/entities/territory.entity';
import { User } from './modules/user/entities/user.entity';
import { Campaign } from './modules/campaign/entities/campaign.entity';
import { Voter } from './modules/voter/entities/voter.entity'; // Ruta corregida

// Módulos
import { AuthModule } from './modules/auth/auth.module';
import { CampaignModule } from './modules/campaign/campaign.module';
import { VoterModule } from './modules/voter/voter.module';
import { TerritoryModule } from './modules/territory/territory.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([Territory, User, Campaign, Voter]),
    AuthModule,
    CampaignModule,
    VoterModule,
    TerritoryModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}