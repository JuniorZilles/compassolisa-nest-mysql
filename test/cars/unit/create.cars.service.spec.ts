import { Test, TestingModule } from '@nestjs/testing';
import CarsService from '@services/cars/cars.service';
import CarDto from '@dto/cars/car.dto';
import MysqlModule from '../../../src/database/mysql/mysql.module';
import carFactory from '../../utils/factory/car.factory';

describe('scr :: api :: service :: cars :: create()', () => {
  describe('GIVEN an empty database', () => {
    let service: CarsService;

    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        imports: [MysqlModule],
        providers: [CarsService]
      }).compile();

      service = module.get<CarsService>(CarsService);
    });

    describe('WHEN creating a valid new car', () => {
      let car: CarDto;
      beforeEach(async () => {
        car = await service.create(carFactory);
      });
      test('THEN it should insert a new car and return a ID', () => {
        expect(car.id).toBeDefined();
        expect(car.id).toBeInstanceOf(String);
      });
    });

    describe('WHEN creating a invalid new car', () => {
      test('THEN it should throw an error', async () => {
        carFactory.acessorios = [];

        expect(await service.create(carFactory)).toThrowError("The field 'acessorios' is out of the standard format");
      });
    });
  });
});
