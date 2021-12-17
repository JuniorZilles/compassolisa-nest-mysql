import { Test, TestingModule } from '@nestjs/testing';
import { PeopleService } from '@services/people/people.service';

describe('scr :: api :: service :: people :: PeopleService()', () => {
  describe('GIVEN a context that a Module is not instantiated', () => {
    describe('WHEN the Module is instantiated just with PeopleService', () => {
      let service: PeopleService;

      beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
          providers: [PeopleService]
        }).compile();

        service = module.get<PeopleService>(PeopleService);
      });

      it('THEN the PeopleService should be defined', () => {
        expect(service).toBeDefined();
      });

      it('THEN the PeopleService should have a findAll method', () => {
        expect(service).toHaveProperty('findAll');
      });

      it('THEN the PeopleService should have a findOne method', () => {
        expect(service).toHaveProperty('findOne');
      });

      it('THEN the PeopleService should have a create method', () => {
        expect(service).toHaveProperty('create');
      });

      it('THEN the PeopleService should have a update method', () => {
        expect(service).toHaveProperty('update');
      });

      it('THEN the PeopleService should have a remove method', () => {
        expect(service).toHaveProperty('remove');
      });
    });
  });
});
