import Accessory from '@entities/cars/cars.accessory/accessory.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Accessory)
export default class AccessoryRepository extends Repository<Accessory> {}
