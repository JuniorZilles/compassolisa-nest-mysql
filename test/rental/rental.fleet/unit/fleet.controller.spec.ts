import { Test, TestingModule } from '@nestjs/testing';
import { FleetController } from '@controllers/rental/rental.fleet/fleet.controller';
import { FleetService } from '@services/rental/rental.fleet/fleet.service';

describe('scr :: api :: controllers :: rental :: rental.fleet :: FleetController()', () => {
  describe('GIVEN a context that FleetModule is not instantiated', () => {
    describe('WHEN the FleetModule is instantiated', () => {
      let controller: FleetController;

      beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
          controllers: [FleetController],
          providers: [FleetService],
        }).compile();

        controller = module.get<FleetController>(FleetController);
      });

      it('THEN the FleetController should be defined', () => {
        expect(controller).toBeDefined();
      });

      it('THEN the FleetController should have a findAll method', () => {
        expect(controller).toHaveProperty('findAll');
      });

      it('THEN the FleetController should have a findOne method', () => {
        expect(controller).toHaveProperty('findOne');
      });

      it('THEN the FleetController should have a create method', () => {
        expect(controller).toHaveProperty('create');
      });

      it('THEN the FleetController should have a update method', () => {
        expect(controller).toHaveProperty('update');
      });

      it('THEN the FleetController should have a remove method', () => {
        expect(controller).toHaveProperty('remove');
      });
    });
  });
});
