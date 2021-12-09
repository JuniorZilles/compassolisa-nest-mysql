import { Test, TestingModule } from '@nestjs/testing';
import { PeopleController } from '../../../src/api/controllers/people/people.controller';
import { PeopleService } from '../../../src/api/services/people/people.service';

describe('PeopleController', () => {
  let controller: PeopleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeopleController],
      providers: [PeopleService],
    }).compile();

    controller = module.get<PeopleController>(PeopleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
