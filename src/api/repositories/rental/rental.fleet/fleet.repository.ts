import Fleet from '@entities/rental/rental.fleet/fleet.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Fleet)
export default class FleetRepository extends Repository<Fleet> {}
