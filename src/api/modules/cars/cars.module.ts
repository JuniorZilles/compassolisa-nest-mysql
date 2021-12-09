import { Module } from '@nestjs/common';
import { CarsService } from '@services/cars/cars.service';
import { CarsController } from '@controllers/cars/cars.controller';
import { AccessoryModule } from './cars.accessory/accessory.module';

@Module({
  imports: [AccessoryModule],
  controllers: [CarsController],
  providers: [CarsService]
})
export class CarsModule {}
