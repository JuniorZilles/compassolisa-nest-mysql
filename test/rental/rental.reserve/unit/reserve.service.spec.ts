import { Test, TestingModule } from '@nestjs/testing';
import ReserveService from '@services/rental/rental.reserve/reserve.service';

describe('scr :: api :: service :: people :: ReserveService()', () => {
  describe('GIVEN a context that a Module is not instantiated', () => {
    describe('WHEN the Module is instantiated just with ReserveService', () => {
      let service: ReserveService;

      beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
          providers: [ReserveService]
        }).compile();

        service = module.get<ReserveService>(ReserveService);
      });

      it('THEN the ReserveService should be defined', () => {
        expect(service).toBeDefined();
      });

      it('THEN the ReserveService should have a findAll method', () => {
        expect(service).toHaveProperty('findAll');
      });

      it('THEN the ReserveService should have a findOne method', () => {
        expect(service).toHaveProperty('findOne');
      });

      it('THEN the ReserveService should have a create method', () => {
        expect(service).toHaveProperty('create');
      });

      it('THEN the ReserveService should have a update method', () => {
        expect(service).toHaveProperty('update');
      });

      it('THEN the ReserveService should have a remove method', () => {
        expect(service).toHaveProperty('remove');
      });
    });
  });
});
