import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import CarsRepository from '@repositories/cars/cars.repository';
import CarsService from '@services/cars/cars.service';
import { MOCKCARREPOSITORY, GENERATED, UUID } from '../../utils/mocks/cars.repository.mock';

describe('scr :: api :: service :: cars :: findById()', () => {
  describe('GIVEN 10 existent cars', () => {
    let service: CarsService;
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

    describe('WHEN searching by one existing ID car', () => {
      test('THEN it should return the existing car', async () => {
        const car = await service.findById(id);
        expect(car).toEqual({
          ...GENERATED[4]
        });

        expect(MOCKCARREPOSITORY.findOneCarById).toHaveBeenCalledWith(id);
      });
    });

    describe('WHEN searching by one nonexistent car', () => {
      test('THEN it should throw a not found exception', async () => {
        try {
          await service.findById(UUID);
        } catch (e) {
          expect(e).toBeInstanceOf(NotFoundException);
          expect((<NotFoundException>e).name).toBe('NotFoundException');
          expect((<NotFoundException>e).message).toBe('Car not found');
        }
        expect(MOCKCARREPOSITORY.findOneCarById).toHaveBeenCalledWith(UUID);
      });
    });
  });
});
