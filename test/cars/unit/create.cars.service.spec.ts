import CarsService from '@services/cars/cars.service';
import CarsRepository from '@repositories/cars/cars.repository';
import { Test, TestingModule } from '@nestjs/testing';
import { oneCar } from '../../utils/factory/car.factory';
import { MOCKCARREPOSITORY } from '../../utils/mocks/cars.repository.mock';

describe('scr :: api :: service :: cars :: create()', () => {
  describe('GIVEN an empty database', () => {
    let service: CarsService;
    const carFactory = oneCar();
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [CarsRepository, CarsService]
      })
        .overrideProvider(CarsRepository)
        .useValue(MOCKCARREPOSITORY)
        .compile();

      service = module.get<CarsService>(CarsService);
    });

    describe('WHEN creating a valid new car', () => {
      test('THEN it should insert a new car and return a ID, and date of insert and update', async () => {
        expect(await service.create(carFactory)).toEqual({
          ...carFactory,
          id: expect.any(String),
          created_at: expect.any(Date),
          updated_at: expect.any(Date)
        });

        expect(MOCKCARREPOSITORY.insertCar).toHaveBeenCalledWith(carFactory);
      });
    });
  });
});
