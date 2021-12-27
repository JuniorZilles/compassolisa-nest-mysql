import { Test, TestingModule } from '@nestjs/testing';
import AccessoryService from '@services/cars/cars.accessory/accessory.service';

describe('AccessoryService', () => {
  let service: AccessoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccessoryService]
    }).compile();

    service = module.get<AccessoryService>(AccessoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
