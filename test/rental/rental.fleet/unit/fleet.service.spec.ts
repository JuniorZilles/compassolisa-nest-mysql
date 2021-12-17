import { Test, TestingModule } from '@nestjs/testing';
import { FleetService } from '@services/rental/rental.fleet/fleet.service';

describe('scr :: api :: service :: rental :: rental.fleet :: FleetService()', () => {
  describe('GIVEN a context that a Module is not instantiated', () => {
    describe('WHEN the Module is instantiated just with FleetService', () => {
      let service: FleetService;

      beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
          providers: [FleetService]
        }).compile();

        service = module.get<FleetService>(FleetService);
      });

      it('THEN the FleetService should be defined', () => {
        expect(service).toBeDefined();
      });

      it('THEN the FleetService should have a findAll method', () => {
        expect(service).toHaveProperty('findAll');
      });

      it('THEN the FleetService should have a findOne method', () => {
        expect(service).toHaveProperty('findOne');
      });

      it('THEN the FleetService should have a create method', () => {
        expect(service).toHaveProperty('create');
      });

      it('THEN the FleetService should have a update method', () => {
        expect(service).toHaveProperty('update');
      });

      it('THEN the FleetService should have a remove method', () => {
        expect(service).toHaveProperty('remove');
      });
    });
  });
});
