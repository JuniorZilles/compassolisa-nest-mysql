import { Test, TestingModule } from '@nestjs/testing';
import CarsService from '@services/cars/cars.service';

describe('scr :: api :: service :: cars :: findById()', () => {
  describe('CarsService', () => {
    let service: CarsService;

    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [CarsService]
      }).compile();

      service = module.get<CarsService>(CarsService);
    });

    it('should be defined', () => {
      expect(service).toBeDefined();
    });
  });
});
