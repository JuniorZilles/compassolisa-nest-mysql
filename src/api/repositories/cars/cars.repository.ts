import CarDto from '@dto/cars/car.dto';
import Car from '@entities/cars/car.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Car)
export default class CarsRepository extends Repository<Car> {
  async insertCar(createCarDto: CarDto): Promise<CarDto> {
    const car = this.create(createCarDto);
    await this.save(car);
    return car;
  }
}
