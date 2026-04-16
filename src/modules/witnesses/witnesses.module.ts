import { Module } from '@nestjs/common';
import { WitnessesService } from './witnesses.service';
import { WitnessesController } from './witnesses.controller';

@Module({
  providers: [WitnessesService],
  controllers: [WitnessesController]
})
export class WitnessesModule {}
