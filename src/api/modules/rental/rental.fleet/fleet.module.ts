import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import FleetService from '@services/rental/rental.fleet/fleet.service';
import FleetController from '@controllers/rental/rental.fleet/fleet.controller';
import RentalFleetIdValidationMiddleware from '@validations/rental/fleet/idFleetValidation';
import RentalFleetGetValidationMiddleware from '@validations/rental/fleet/getFleetValidation';
import RentalFleetPostPutValidationMiddleware from '@validations/rental/fleet/postputFleetValidation';

@Module({
  controllers: [FleetController],
  providers: [FleetService]
})
export default class FleetModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RentalFleetGetValidationMiddleware)
      .forRoutes({ path: '/rental/:id/reserve', method: RequestMethod.GET });
    consumer
      .apply(RentalFleetPostPutValidationMiddleware)
      .forRoutes({ path: '/rental/:id/fleet', method: RequestMethod.POST });
    consumer
      .apply(RentalFleetIdValidationMiddleware)
      .forRoutes({ path: '/rental/:id/fleet/:fleetId', method: RequestMethod.ALL });
    consumer
      .apply(RentalFleetPostPutValidationMiddleware)
      .forRoutes({ path: '/rental/:id/fleet/:fleetId', method: RequestMethod.PUT });
  }
}
