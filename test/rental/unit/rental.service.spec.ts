import { Test, TestingModule } from '@nestjs/testing';
import { RentalService } from '@services/rental/rental.service';

describe('scr :: api :: service :: people :: RentalService()', () => {
  describe('GIVEN a context that a Module is not instantiated', () => {
    describe('WHEN the Module is instantiated just with RentalService', () => {
      let service: RentalService;

      beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
          providers: [RentalService]
        }).compile();

        service = module.get<RentalService>(RentalService);
      });

      it('THEN the RentalService should be defined', () => {
        expect(service).toBeDefined();
      });

      it('THEN the RentalService should have a findAll method', () => {
        expect(service).toHaveProperty('findAll');
      });

      it('THEN the RentalService should have a findOne method', () => {
        expect(service).toHaveProperty('findOne');
      });

      it('THEN the RentalService should have a create method', () => {
        expect(service).toHaveProperty('create');
      });

      it('THEN the RentalService should have a update method', () => {
        expect(service).toHaveProperty('update');
      });

      it('THEN the RentalService should have a remove method', () => {
        expect(service).toHaveProperty('remove');
      });
    });
  });
});
