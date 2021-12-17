import { Module } from '@nestjs/common';
import PeopleService from '@services/people/people.service';
import PeopleController from '@controllers/people/people.controller';

@Module({
  controllers: [PeopleController],
  providers: [PeopleService]
})
export default class PeopleModule {}
