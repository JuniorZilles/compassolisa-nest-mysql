import { Test, TestingModule } from '@nestjs/testing';
import { CarsController } from '@controllers/cars/cars.controller';
import { CarsService } from '@services/cars/cars.service';


describe('scr :: api :: controllers :: cars :: CarsController()', () => {
  describe('GIVEN a context that CarsModule is not instantiated', () => {
    describe('WHEN the CarsModule is instantiated', () => {
      let controller: CarsController;

      beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
          controllers: [CarsController],
          providers: [CarsService],
        }).compile();

        controller = module.get<CarsController>(CarsController);
      });

      it('THEN the CarsController should be defined', () => {
        expect(controller).toBeDefined();
      });

      it('THEN the CarsController should have a findAll method', () => {
        expect(controller).toHaveProperty('findAll');
      });

      it('THEN the CarsController should have a findOne method', () => {
        expect(controller).toHaveProperty('findOne');
      });

      it('THEN the CarsController should have a create method', () => {
        expect(controller).toHaveProperty('create');
      });

      it('THEN the CarsController should have a update method', () => {
        expect(controller).toHaveProperty('update');
      });

      it('THEN the CarsController should have a remove method', () => {
        expect(controller).toHaveProperty('remove');
      });
    });
  });
});
