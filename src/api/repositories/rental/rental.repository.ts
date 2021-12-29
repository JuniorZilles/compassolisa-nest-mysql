import Rental from '@entities/rental/rental.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Rental)
export default class RentalRepository extends Repository<Rental> {}
