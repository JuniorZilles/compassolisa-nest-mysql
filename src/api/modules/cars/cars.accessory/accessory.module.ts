import { Module } from '@nestjs/common';
import AccessoryService from '@services/cars/cars.accessory/accessory.service';
import AccessoryController from '@controllers/cars/cars.accessory/accessory.controller';

@Module({
  controllers: [AccessoryController],
  providers: [AccessoryService]
})
export default class AccessoryModule {}
