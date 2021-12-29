import Reserve from '@entities/rental/rental.reserve/reserve.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Reserve)
export default class ReserveRepository extends Repository<Reserve> {}
