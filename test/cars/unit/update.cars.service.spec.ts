import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import CarsRepository from '@repositories/cars/cars.repository';
import CarsService from '@services/cars/cars.service';
import { oneCar } from '../../utils/factory/car.factory';
import { MOCKCARREPOSITORY, GENERATED, UUID } from '../../utils/mocks/cars.repository.mock';

describe('scr :: api :: service :: cars :: update()', () => {
  describe('GIVEN a existent car model', () => {
    let service: CarsService;
    const carFactory = oneCar();
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { id } = GENERATED[4];
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [CarsRepository, CarsService]
      })
        .overrideProvider(CarsRepository)
        .useValue(MOCKCARREPOSITORY)
        .compile();

      service = module.get<CarsService>(CarsService);
    });

    describe('WHEN updating a existent car', () => {
      test('THEN it should update the existing car by his ID, and update the updated_at', async () => {
        const car = await service.update(id, carFactory);
        expect(car).toEqual({
          ...carFactory,
          id,
          created_at: expect.any(Date),
          updated_at: expect.any(Date)
        });

        expect(MOCKCARREPOSITORY.findOne).toHaveBeenCalledWith(id);
        expect(MOCKCARREPOSITORY.updateCar).toHaveBeenCalledWith(id, carFactory);
      });
    });

    describe('WHEN updating a nonexistent car', () => {
      test('THEN it should throw a not found exception', async () => {
        try {
          await service.update(UUID, carFactory);
        } catch (e) {
          expect(e).toBeInstanceOf(NotFoundException);
          expect((<NotFoundException>e).name).toBe('NotFoundException');
          expect((<NotFoundException>e).message).toBe('Car not found');
        }
        expect(MOCKCARREPOSITORY.findOne).toHaveBeenCalledWith(UUID);
      });
    });
  });
});
