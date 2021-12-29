import Person from '@entities/people/person.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Person)
export default class PeopleRepository extends Repository<Person> {}
