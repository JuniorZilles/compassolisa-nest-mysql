import { Injectable } from '@nestjs/common';
import CreateReserveDto from '@dto/rental/rental.reserve/create-reserve.dto';
import UpdateReserveDto from '@dto/rental/rental.reserve/update-reserve.dto';

@Injectable()
export default class ReserveService {
  create(createReserveDto: CreateReserveDto) {
    return 'This action adds a new reserve';
  }

  findAll() {
    return `This action returns all reserve`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reserve`;
  }

  update(id: number, updateReserveDto: UpdateReserveDto) {
    return `This action updates a #${id} reserve`;
  }

  remove(id: number) {
    return `This action removes a #${id} reserve`;
  }
}
