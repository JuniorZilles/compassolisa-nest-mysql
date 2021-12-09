import { Test, TestingModule } from '@nestjs/testing';
import { CarsController } from '../../../src/api/controllers/cars/cars.controller';
import { CarsService } from '../../../src/api/services/cars/cars.service';

describe('CarsController', () => {
  let controller: CarsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarsController],
      providers: [CarsService],
    }).compile();

    controller = module.get<CarsController>(CarsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
