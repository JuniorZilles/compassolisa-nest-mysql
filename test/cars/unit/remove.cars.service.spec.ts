import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import CarsRepository from '@repositories/cars/cars.repository';
import CarsService from '@services/cars/cars.service';
import { MOCKCARREPOSITORY, GENERATED, UUID } from '../../utils/mocks/cars.repository.mock';

describe('scr :: api :: service :: cars :: remove()', () => {
  describe('GIVEN a existent car model', () => {
    let service: CarsService;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { id } = GENERATED[4];
    const tempCar = { ...GENERATED[4] };
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [CarsRepository, CarsService]
      })
        .overrideProvider(CarsRepository)
        .useValue(MOCKCARREPOSITORY)
        .compile();

      service = module.get<CarsService>(CarsService);
    });

    describe('WHEN removing a existent car', () => {
      test('THEN it should return the removed car', async () => {
        const car = await service.remove(id);
        expect(car).toEqual(tempCar);

        expect(MOCKCARREPOSITORY.delete).toHaveBeenCalledWith(id);
      });
    });

    describe('WHEN removing a nonexistent car', () => {
      test('THEN it should throw a not found exception', async () => {
        try {
          await service.remove(UUID);
        } catch (e) {
          expect(e).toBeInstanceOf(NotFoundException);
          expect((<NotFoundException>e).name).toBe('NotFoundException');
          expect((<NotFoundException>e).message).toBe('Car not found');
        }
        expect(MOCKCARREPOSITORY.delete).toHaveBeenCalledWith(UUID);
      });
    });
  });
});
