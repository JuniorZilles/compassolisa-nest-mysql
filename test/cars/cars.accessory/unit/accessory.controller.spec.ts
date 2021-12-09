import { Test, TestingModule } from '@nestjs/testing';
import { AccessoryController } from '@controllers/cars/cars.accessory/accessory.controller';
import { AccessoryService } from '@services/cars/cars.accessory/accessory.service';

describe('AccessoryController', () => {
  let controller: AccessoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccessoryController],
      providers: [AccessoryService],
    }).compile();

    controller = module.get<AccessoryController>(AccessoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
