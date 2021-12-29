import { Injectable } from '@nestjs/common';
import CarDto from '@dto/cars/car.dto';
import SearchCarDto from '@dto/cars/search-car.dto';
import CarsRepository from '@repositories/cars/cars.repository';

@Injectable()
export default class CarsService {
  constructor(private readonly carRepo: CarsRepository) {}

  async create(createCarDto: CarDto): Promise<CarDto> {
    const car = await this.carRepo.create(createCarDto);
    return car;
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
