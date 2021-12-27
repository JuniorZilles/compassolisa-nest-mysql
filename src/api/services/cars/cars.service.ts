import { Injectable } from '@nestjs/common';
import CarDto from '@dto/cars/car.dto';
import SearchCarDto from '@dto/cars/search-car.dto';

@Injectable()
export default class CarsService {
  create(createCarDto: CarDto) {
    return 'This action adds a new car';
  }

  findAll(payload: SearchCarDto) {
    return `This action returns all cars`;
  }

  findOne(id: string) {
    return `This action returns a #${id} car`;
  }

  update(id: string, updateCarDto: CarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: string) {
    return `This action removes a #${id} car`;
  }
}
