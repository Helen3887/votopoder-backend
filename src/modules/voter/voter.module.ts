import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VoterService } from './voter.service';
import { VoterController } from './voter.controller';
import { Voter } from './entities/voter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Voter])],
  controllers: [VoterController],
  providers: [VoterService],
})
export class VoterModule {}