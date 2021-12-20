import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import CarsService from '@services/cars/cars.service';
import CarsController from '@controllers/cars/cars.controller';
import CarGetValidationMiddleware from '@validations/car/getCarValidation';
import CarPostPutValidationMiddleware from '@validations/car/postPutCarValidation';
import CarPatchValidationMiddleware from '@validations/car/patchCarValidation';
import IdValidationMiddleware from '@validations/idValidation';
import AccessoryModule from './cars.accessory/accessory.module';

@Module({
  imports: [AccessoryModule],
  controllers: [CarsController],
  providers: [CarsService]
})
export default class CarsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CarGetValidationMiddleware).forRoutes({ path: 'cars', method: RequestMethod.GET });
    consumer.apply(CarPostPutValidationMiddleware).forRoutes({ path: 'cars', method: RequestMethod.POST });
    consumer.apply(IdValidationMiddleware).forRoutes({ path: 'cars/:id', method: RequestMethod.ALL });
    consumer.apply(CarPostPutValidationMiddleware).forRoutes({ path: 'cars/:id', method: RequestMethod.PUT });
    consumer.apply(CarPatchValidationMiddleware).forRoutes({ path: 'cars/:id', method: RequestMethod.PATCH });
  }
}
