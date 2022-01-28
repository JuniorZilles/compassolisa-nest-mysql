import { Test, TestingModule } from '@nestjs/testing';
import CarsRepository from '@repositories/cars/cars.repository';
import CarsService from '@services/cars/cars.service';

describe('scr :: api :: service :: cars :: CarsService()', () => {
  describe('GIVEN a context that a Module is not instantiated', () => {
    describe('WHEN the Module is instantiated just with the provider CarsService', () => {
      let service: CarsService;

      beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
          providers: [CarsRepository, CarsService]
        }).compile();

        service = module.get<CarsService>(CarsService);
      });

      it('THEN the CarsService should be defined', () => {
        expect(service).toBeDefined();
      });

      it('THEN the CarsService should have a findAll method', () => {
        expect(service).toHaveProperty('findAll');
      });

      it('THEN the CarsService should have a findOne method', () => {
        expect(service).toHaveProperty('findById');
      });

      it('THEN the CarsService should have a create method', () => {
        expect(service).toHaveProperty('create');
      });

      it('THEN the CarsService should have a update method', () => {
        expect(service).toHaveProperty('update');
      });

      it('THEN the CarsService should have a remove method', () => {
        expect(service).toHaveProperty('remove');
      });
    });
  });
});
