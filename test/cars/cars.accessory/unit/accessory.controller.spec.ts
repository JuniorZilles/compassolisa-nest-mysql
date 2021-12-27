import { Test, TestingModule } from '@nestjs/testing';
import AccessoryController from '@controllers/cars/cars.accessory/accessory.controller';
import AccessoryService from '@services/cars/cars.accessory/accessory.service';

describe('scr :: api :: controllers :: cars :: cars.accessory :: AccessoryController()', () => {
  describe('GIVEN a context that AccessoryModule is not instantiated', () => {
    describe('WHEN the AccessoryModule is instantiated', () => {
      let controller: AccessoryController;

      beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
          controllers: [AccessoryController],
          providers: [AccessoryService]
        }).compile();

        controller = module.get<AccessoryController>(AccessoryController);
      });

      it('THEN the AccessoryController should be defined', () => {
        expect(controller).toBeDefined();
      });

      it('THEN the AccessoryController should have a findAll method', () => {
        expect(controller).toHaveProperty('findAll');
      });

      it('THEN the AccessoryController should have a findOne method', () => {
        expect(controller).toHaveProperty('findOne');
      });

      it('THEN the AccessoryController should have a create method', () => {
        expect(controller).toHaveProperty('create');
      });

      it('THEN the AccessoryController should have a update method', () => {
        expect(controller).toHaveProperty('update');
      });

      it('THEN the AccessoryController should have a remove method', () => {
        expect(controller).toHaveProperty('remove');
      });
    });
  });
});
