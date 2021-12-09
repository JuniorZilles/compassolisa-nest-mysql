import { Test, TestingModule } from '@nestjs/testing';
import { FleetController } from '@controllers/rental/rental.fleet/fleet.controller';
import { FleetService } from '@services/rental/rental.fleet/fleet.service';

describe('FleetController', () => {
  let controller: FleetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FleetController],
      providers: [FleetService],
    }).compile();

    controller = module.get<FleetController>(FleetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
