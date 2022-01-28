import CarDto from '@dto/cars/car.dto';
import SearchCarDto from '@dto/cars/search-car.dto';
import Car from '@entities/cars/car.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Car)
export default class CarsRepository extends Repository<Car> {
  async insertCar(createCarDto: CarDto): Promise<CarDto> {
    const car = this.create(createCarDto);
    await this.save(car);
    return car;
  }

  async updateCar(id: string, updateCarDto: CarDto): Promise<CarDto> {
    const car = await this.save({ id, updateCarDto });
    return car;
  }

  async findOneCarById(id: string): Promise<CarDto> {
    const result = await this.findOne(id, { relations: ['acessorios'] });
    return result;
  }

  async findAll(payload: SearchCarDto): Promise<CarDto[]> {
    const result = await this.find(payload);
    return result;
  }
}
