import { Module } from '@nestjs/common';
import { HoldsService } from './holds.service';
import { HoldsController } from './holds.controller';

@Module({
  controllers: [HoldsController],
  providers: [HoldsService],
})
export class HoldsModule {}
