import { Injectable } from '@nestjs/common';
import FleetDto from '@dto/rental/rental.fleet/fleet.dto';
import SearchFleetDto from '@dto/rental/rental.fleet/search-fleet.dto';

@Injectable()
export default class FleetService {
  create(id: string, createFleetDto: FleetDto) {
    return 'This action adds a new fleet';
  }

  findAll(id: string, payload: SearchFleetDto) {
    return 'This action returns all fleet';
  }

  findOne(id: string, fleetId: string) {
    return `This action returns a #${id} fleet`;
  }

  update(id: string, fleetId: string, updateFleetDto: FleetDto) {
    return `This action updates a #${id} fleet`;
  }

  remove(id: string, fleetId: string) {
    return `This action removes a #${id} fleet`;
  }
}
