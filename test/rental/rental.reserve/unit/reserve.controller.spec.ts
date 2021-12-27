import { Test, TestingModule } from '@nestjs/testing';
import ReserveController from '@controllers/rental/rental.reserve/reserve.controller';
import ReserveService from '@services/rental/rental.reserve/reserve.service';

describe('scr :: api :: controllers :: rental :: rental.reserve :: ReserveController()', () => {
  describe('GIVEN a context that ReserveModule is not instantiated', () => {
    describe('WHEN the ReserveModule is instantiated', () => {
      let controller: ReserveController;

      beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
          controllers: [ReserveController],
          providers: [ReserveService]
        }).compile();

        controller = module.get<ReserveController>(ReserveController);
      });

      it('THEN the ReserveController should be defined', () => {
        expect(controller).toBeDefined();
      });

      it('THEN the ReserveController should have a findAll method', () => {
        expect(controller).toHaveProperty('findAll');
      });

      it('THEN the ReserveController should have a findOne method', () => {
        expect(controller).toHaveProperty('findOne');
      });

      it('THEN the ReserveController should have a create method', () => {
        expect(controller).toHaveProperty('create');
      });

      it('THEN the ReserveController should have a update method', () => {
        expect(controller).toHaveProperty('update');
      });

      it('THEN the ReserveController should have a remove method', () => {
        expect(controller).toHaveProperty('remove');
      });
    });
  });
});
