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

  async findOne(id: string): Promise<CarDto> {
    const car = await this.carRepo.findOne(id);
    if (!car || Object.keys(car).length === 0) {
      throw new NotFoundException('Car not found');
    }
    return car;
  }

  async update(id: string, updateCarDto: CarDto): Promise<CarDto> {
    await this.findOne(id);
    const car = await this.carRepo.updateCar(id, updateCarDto);
    return car;
  }

  remove(id: string) {
    return `This action removes a #${id} car`;
  }
}
