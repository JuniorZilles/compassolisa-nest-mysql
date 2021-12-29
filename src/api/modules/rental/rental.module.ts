import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import RentalService from '@services/rental/rental.service';
import RentalController from '@controllers/rental/rental.controller';
import IdValidationMiddleware from '@validations/idValidation';
import RentalGetValidationMiddleware from '@validations/rental/getRentalValidation';
import RentalPostPutValidationMiddleware from '@validations/rental/postPutRentalValidation';
import { TypeOrmModule } from '@nestjs/typeorm';
import RentalRepository from '@repositories/rental/rental.repository';
import FleetModule from './rental.fleet/fleet.module';
import ReserveModule from './rental.reserve/reserve.module';

@Module({
  imports: [FleetModule, ReserveModule, TypeOrmModule.forFeature([RentalRepository])],
  controllers: [RentalController],
  providers: [RentalService]
})
export default class RentalModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RentalGetValidationMiddleware).forRoutes({ path: 'rental', method: RequestMethod.GET });
    consumer.apply(RentalPostPutValidationMiddleware).forRoutes({ path: 'rental', method: RequestMethod.POST });
    consumer.apply(IdValidationMiddleware).forRoutes({ path: 'rental/:id', method: RequestMethod.ALL });
    consumer.apply(RentalPostPutValidationMiddleware).forRoutes({ path: 'rental/:id', method: RequestMethod.PUT });
  }
}
