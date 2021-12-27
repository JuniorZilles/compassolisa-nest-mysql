import { Injectable } from '@nestjs/common';
import ReserveDto from '@dto/rental/rental.reserve/reserve.dto';
import SearchReserveDto from '@dto/rental/rental.reserve/search-reserve.dto';

@Injectable()
export default class ReserveService {
  create(id: string, createReserveDto: ReserveDto) {
    return 'This action adds a new reserve';
  }

  findAll(id: string, payload: SearchReserveDto) {
    return `This action returns all reserve`;
  }

  findOne(id: string, reserveId: string) {
    return `This action returns a #${id} reserve`;
  }

  update(id: string, reserveId: string, updateReserveDto: ReserveDto) {
    return `This action updates a #${id} reserve`;
  }

  remove(id: string, reserveId: string) {
    return `This action removes a #${id} reserve`;
  }
}
