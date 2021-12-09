import { Test, TestingModule } from '@nestjs/testing';
import { ReserveController } from '@controllers/rental/rental.reserve/reserve.controller';
import { ReserveService } from '@services/rental/rental.reserve/reserve.service';

describe('ReserveController', () => {
  let controller: ReserveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReserveController],
      providers: [ReserveService],
    }).compile();

    controller = module.get<ReserveController>(ReserveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
