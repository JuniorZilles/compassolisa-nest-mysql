import { Module } from '@nestjs/common';
import RentalService from '../../services/rental/rental.service';
import RentalController from '../../controllers/rental/rental.controller';
import FleetModule from './rental.fleet/fleet.module';
import ReserveModule from './rental.reserve/reserve.module';

@Module({
  imports: [FleetModule, ReserveModule],
  controllers: [RentalController],
  providers: [RentalService]
})
export default class RentalModule {}
