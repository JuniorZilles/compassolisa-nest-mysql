import { Test, TestingModule } from '@nestjs/testing';
import AccessoryService from '@services/cars/cars.accessory/accessory.service';

describe('scr :: api :: service :: cars :: cars.accessory :: AccessoryService()', () => {
  describe('GIVEN a context that a Module is not instantiated', () => {
    describe('WHEN the Module is instantiated just with AccessoryService', () => {
      let service: AccessoryService;

      beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
          providers: [AccessoryService]
        }).compile();

        service = module.get<AccessoryService>(AccessoryService);
      });

      it('THEN the AccessoryService should be defined', () => {
        expect(service).toBeDefined();
      });

      it('THEN the AccessoryService should have a findAll method', () => {
        expect(service).toHaveProperty('findAll');
      });

      it('THEN the AccessoryService should have a findOne method', () => {
        expect(service).toHaveProperty('findOne');
      });

      it('THEN the AccessoryService should have a create method', () => {
        expect(service).toHaveProperty('create');
      });

      it('THEN the AccessoryService should have a update method', () => {
        expect(service).toHaveProperty('update');
      });

      it('THEN the AccessoryService should have a remove method', () => {
        expect(service).toHaveProperty('remove');
      });
    });
  });
});
