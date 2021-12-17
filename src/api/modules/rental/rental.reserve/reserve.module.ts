import { Module } from '@nestjs/common';
import ReserveService from '@services/rental/rental.reserve/reserve.service';
import ReserveController from '@controllers/rental/rental.reserve/reserve.controller';

@Module({
  controllers: [ReserveController],
  providers: [ReserveService]
})
export default class ReserveModule {}
