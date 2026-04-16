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
import { StatisticsModule } from './modules/statistics/statistics.module';
import { LogisticsModule } from './modules/logistics/logistics.module';
import { WitnessesModule } from './modules/witnesses/witnesses.module';
import { ReportsModule } from './modules/reports/reports.module';
import { MessagingModule } from './modules/messaging/messaging.module';
import { EventsModule } from './modules/events/events.module';
import { FinancesModule } from './modules/finances/finances.module';
import { MappingModule } from './modules/mapping/mapping.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { PollingStationsModule } from './modules/polling-stations/polling-stations.module';
import { CoordinatorsModule } from './modules/coordinators/coordinators.module';
import { LeadsModule } from './modules/leads/leads.module';
import { PqrModule } from './modules/pqr/pqr.module';
import { DocumentsModule } from './modules/documents/documents.module';
import { SecurityModule } from './modules/security/security.module';
import { AuditModule } from './modules/audit/audit.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([Territory, User, Campaign, Voter]),
    AuthModule,
    CampaignModule,
    VoterModule,
    TerritoryModule,
    UserModule,
    StatisticsModule,
    LogisticsModule,
    WitnessesModule,
    ReportsModule,
    MessagingModule,
    EventsModule,
    FinancesModule,
    MappingModule,
    InventoryModule,
    PollingStationsModule,
    CoordinatorsModule,
    LeadsModule,
    PqrModule,
    DocumentsModule,
    SecurityModule,
    AuditModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}