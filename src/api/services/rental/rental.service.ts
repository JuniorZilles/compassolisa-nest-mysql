import { Injectable } from '@nestjs/common';
import RentalDto from '@dto/rental/rental.dto';
import UpdateRentalDto from '@dto/rental/list-rental.dto';
import SearchRentalDto from '@dto/rental/search-rental.dto';

@Injectable()
export default class RentalService {
  create(createRentalDto: RentalDto) {
    return 'This action adds a new rental';
  }

  findAll(payload: SearchRentalDto) {
    return `This action returns all rental`;
  }

  findOne(id: string) {
    return `This action returns a #${id} rental`;
  }

  update(id: string, updateRentalDto: RentalDto) {
    return `This action updates a #${id} rental`;
  }

  remove(id: string) {
    return `This action removes a #${id} rental`;
  }
}
