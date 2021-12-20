import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import ReserveService from '@services/rental/rental.reserve/reserve.service';
import ReserveController from '@controllers/rental/rental.reserve/reserve.controller';
import RentalReservePostPutValidationMiddleware from '@validations/rental/reserve/postputReserveValidation';
import RentalReserveIdValidationMiddleware from '@validations/rental/reserve/idReserveValidation';
import RentalReserveGetValidationMiddleware from '@validations/rental/reserve/getReserveValidation';

@Module({
  controllers: [ReserveController],
  providers: [ReserveService]
})
export default class ReserveModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RentalReserveGetValidationMiddleware)
      .forRoutes({ path: '/rental/:id/reserve', method: RequestMethod.GET });
    consumer
      .apply(RentalReservePostPutValidationMiddleware)
      .forRoutes({ path: '/rental/:id/reserve', method: RequestMethod.POST });
    consumer
      .apply(RentalReserveIdValidationMiddleware)
      .forRoutes({ path: '/rental/:id/reserve/:reservetId', method: RequestMethod.ALL });
    consumer
      .apply(RentalReservePostPutValidationMiddleware)
      .forRoutes({ path: '/rental/:id/reserve/:reservetId', method: RequestMethod.PUT });
  }
}
