import { Injectable } from '@nestjs/common';
import CreateAccessoryDto from '@dto/cars/cars.accessory/create-accessory.dto';
import UpdateAccessoryDto from '@dto/cars/cars.accessory/update-accessory.dto';

@Injectable()
export default class AccessoryService {
  create(createAccessoryDto: CreateAccessoryDto) {
    return 'This action adds a new accessory';
  }

  findAll() {
    return `This action returns all accessory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accessory`;
  }

  update(id: number, updateAccessoryDto: UpdateAccessoryDto) {
    return `This action updates a #${id} accessory`;
  }

  remove(id: number) {
    return `This action removes a #${id} accessory`;
  }
}
