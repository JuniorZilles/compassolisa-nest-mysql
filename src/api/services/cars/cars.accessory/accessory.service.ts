import { Injectable } from '@nestjs/common';
import CreateAccessoryDto from '@dto/cars/cars.accessory/create-accessory.dto';
import UpdateAccessoryDto from '@dto/cars/cars.accessory/update-accessory.dto';

@Injectable()
export default class AccessoryService {
  create(id: string, createAccessoryDto: CreateAccessoryDto) {
    return `This action adds a new accessory to car #${id}`;
  }

  findAll(id: string) {
    return `This action returns all accessory from #${id} car`;
  }

  findOne(id: string, idAccessory: string) {
    return `This action returns a #${idAccessory} accessory from #${id} car`;
  }

  update(id: string, idAccessory: string, updateAccessoryDto: UpdateAccessoryDto) {
    return `This action updates a #${idAccessory} accessory from #${id} car`;
  }

  remove(id: string, idAccessory: string) {
    return `This action removes a #${idAccessory} accessory from #${id} car`;
  }
}
