import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findById(id: string): Promise<CarDto> {
    const car = await this.carRepo.findOne(id);
    if (!car || Object.keys(car).length === 0) {
      throw new NotFoundException('Car not found');
    }
    return car;
  }

  async update(id: string, updateCarDto: CarDto): Promise<CarDto> {
    const result = await this.carRepo.update(id, updateCarDto);
    if (result.affected > 0) {
      return result.raw;
    }
    throw new NotFoundException('Car not found');
  }

  async remove(id: string) {
    const result = await this.carRepo.delete(id);
    if (result.affected > 0) {
      return result.raw;
    }
    throw new NotFoundException('Car not found');
  }
}
