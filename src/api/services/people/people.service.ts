import { Injectable } from '@nestjs/common';
import PersonDto from '@dto/people/person.dto';
import SearchPersonDto from '@dto/people/search-person.dto';

@Injectable()
export default class PeopleService {
  create(createPersonDto: PersonDto) {
    return 'This action adds a new person';
  }

  findAll(payload: SearchPersonDto) {
    return `This action returns all people`;
  }

  findOne(id: string) {
    return `This action returns a #${id} person`;
  }

  update(id: string, updatePersonDto: PersonDto) {
    return `This action updates a #${id} person`;
  }

  remove(id: string) {
    return `This action removes a #${id} person`;
  }
}
