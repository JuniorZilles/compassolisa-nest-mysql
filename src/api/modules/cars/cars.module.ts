import { Module } from '@nestjs/common';
import { CarsService } from '../../services/cars/cars.service';
import { CarsController } from '../../controllers/cars/cars.controller';

@Module({
  controllers: [CarsController],
  providers: [CarsService]
})
export class CarsModule {}
