import { Module } from '@nestjs/common';
import { PollingStationsService } from './polling-stations.service';
import { PollingStationsController } from './polling-stations.controller';

@Module({
  providers: [PollingStationsService],
  controllers: [PollingStationsController]
})
export class PollingStationsModule {}
