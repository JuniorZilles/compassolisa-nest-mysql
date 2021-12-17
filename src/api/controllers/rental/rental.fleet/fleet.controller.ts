import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import FleetService from '@services/rental/rental.fleet/fleet.service';
import CreateFleetDto from '@dto/rental/rental.fleet/create-fleet.dto';
import UpdateFleetDto from '@dto/rental/rental.fleet/update-fleet.dto';

@Controller({path:'/rental/:id/fleet', version:'1'})
export default class FleetController {
  constructor(private readonly fleetService: FleetService) {}

  @Post()
  create(@Body() createFleetDto: CreateFleetDto) {
    return this.fleetService.create(createFleetDto);
  }

  @Get()
  findAll() {
    return this.fleetService.findAll();
  }

  @Get(':fleetId')
  findOne(@Param('fleetId', ParseIntPipe) fleetId: number) {
    return this.fleetService.findOne(fleetId);
  }

  @Patch(':fleetId')
  update(@Param('fleetId', ParseIntPipe) fleetId: number, @Body() updateFleetDto: UpdateFleetDto) {
    return this.fleetService.update(fleetId, updateFleetDto);
  }

  @Delete(':fleetId')
  remove(@Param('fleetId', ParseIntPipe) fleetId: number) {
    return this.fleetService.remove(fleetId);
  }
}
