import { Test, TestingModule } from '@nestjs/testing';
import PeopleController from '@controllers/people/people.controller';
import PeopleService from '@services/people/people.service';

describe('scr :: api :: controllers :: people :: PeopleController()', () => {
  describe('GIVEN a context that PeopleModule is not instantiated', () => {
    describe('WHEN the PeopleModule is instantiated', () => {
      let controller: PeopleController;

      beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
          controllers: [PeopleController],
          providers: [PeopleService]
        }).compile();

        controller = module.get<PeopleController>(PeopleController);
      });

      it('THEN the PeopleController should be defined', () => {
        expect(controller).toBeDefined();
      });

      it('THEN the PeopleController should have a findAll method', () => {
        expect(controller).toHaveProperty('findAll');
      });

      it('THEN the PeopleController should have a findOne method', () => {
        expect(controller).toHaveProperty('findOne');
      });

      it('THEN the PeopleController should have a create method', () => {
        expect(controller).toHaveProperty('create');
      });

      it('THEN the PeopleController should have a update method', () => {
        expect(controller).toHaveProperty('update');
      });

      it('THEN the PeopleController should have a remove method', () => {
        expect(controller).toHaveProperty('remove');
      });
    });
  });
});
