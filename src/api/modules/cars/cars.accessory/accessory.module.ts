import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import AccessoryService from '@services/cars/cars.accessory/accessory.service';
import AccessoryController from '@controllers/cars/cars.accessory/accessory.controller';
import AccessoryIdPatchValidationMiddleware from '@validations/car/accessory/patchAccessoryIdValidation';
import AccessoryPatchValidationMiddleware from '@validations/car/accessory/patchAccessoryValidation';

@Module({
  controllers: [AccessoryController],
  providers: [AccessoryService]
})
export default class AccessoryModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AccessoryPatchValidationMiddleware)
      .forRoutes({ path: '/cars/:id/accessory', method: RequestMethod.GET });
    consumer
      .apply(AccessoryPatchValidationMiddleware)
      .forRoutes({ path: '/cars/:id/accessory', method: RequestMethod.POST });
    consumer
      .apply(AccessoryIdPatchValidationMiddleware)
      .forRoutes({ path: '/cars/:id/accessory/:accessoryId', method: RequestMethod.ALL });
    consumer
      .apply(AccessoryPatchValidationMiddleware)
      .forRoutes({ path: '/cars/:id/accessory/:accessoryId', method: RequestMethod.PUT });
    consumer
      .apply(AccessoryPatchValidationMiddleware)
      .forRoutes({ path: '/cars/:id/accessory/:accessoryId', method: RequestMethod.PATCH });
  }
}
