import { Test, TestingModule } from '@nestjs/testing';
import { RentalController } from '@controllers/rental/rental.controller';
import { RentalService } from '@services/rental/rental.service';

describe('scr :: api :: controllers :: rental :: RentalController()', () => {
  describe('GIVEN a context that RentalModule is not instantiated', () => {
    describe('WHEN the RentalModule is instantiated', () => {
      let controller: RentalController;

      beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
          controllers: [RentalController],
          providers: [RentalService],
        }).compile();

        controller = module.get<RentalController>(RentalController);
      });

      it('THEN the RentalController should be defined', () => {
        expect(controller).toBeDefined();
      });

      it('THEN the RentalController should have a findAll method', () => {
        expect(controller).toHaveProperty('findAll');
      });

      it('THEN the RentalController should have a findOne method', () => {
        expect(controller).toHaveProperty('findOne');
      });

      it('THEN the RentalController should have a create method', () => {
        expect(controller).toHaveProperty('create');
      });

      it('THEN the RentalController should have a update method', () => {
        expect(controller).toHaveProperty('update');
      });

      it('THEN the RentalController should have a remove method', () => {
        expect(controller).toHaveProperty('remove');
      });
    });
  });
});
