import { Test, TestingModule } from '@nestjs/testing';
import { FleetService } from '@services/rental/rental.fleet/fleet.service';

describe('FleetService', () => {
  let service: FleetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FleetService],
    }).compile();

    service = module.get<FleetService>(FleetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
