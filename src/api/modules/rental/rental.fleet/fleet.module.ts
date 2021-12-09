import { Module } from '@nestjs/common';
import { FleetService } from '@services/rental/rental.fleet/fleet.service';
import { FleetController } from '@controllers/rental/rental.fleet/fleet.controller';

@Module({
  controllers: [FleetController],
  providers: [FleetService]
})
export class FleetModule {}
