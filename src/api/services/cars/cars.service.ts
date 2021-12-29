import { Injectable } from '@nestjs/common';
import CarDto from '@dto/cars/car.dto';
import SearchCarDto from '@dto/cars/search-car.dto';
import CarsRepository from '@repositories/cars/cars.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export default class CarsService {
  constructor(@InjectRepository(CarsRepository) private readonly carRepo: CarsRepository) {}

  async create(createCarDto: CarDto): Promise<CarDto> {
    const car = this.carRepo.insertCar(createCarDto);
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
