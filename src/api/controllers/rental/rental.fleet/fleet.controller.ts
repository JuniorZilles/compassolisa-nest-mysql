import { Controller, Get, Post, Body, Param, Delete, ParseUUIDPipe, Put } from '@nestjs/common';
import FleetService from '@services/rental/rental.fleet/fleet.service';
import FleetDto from '@dto/rental/rental.fleet/fleet.dto';
import SearchFleetDto from '@dto/rental/rental.fleet/search-fleet.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags
} from '@nestjs/swagger';
import ErrorDto from '@dto/error.dto';
import ListFleetDto from '@dto/rental/rental.fleet/list-fleet.dto';

@ApiTags('rental.fleet')
@Controller({ path: '/rental/:id/fleet', version: '1' })
@ApiNotFoundResponse({ description: 'The car was not found.', type: ErrorDto, isArray: true })
@ApiBadRequestResponse({ description: 'Bad Request.', type: ErrorDto, isArray: true })
@ApiInternalServerErrorResponse({ description: 'Internal Server Error.', type: ErrorDto, isArray: true })
export default class FleetController {
  constructor(private readonly fleetService: FleetService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Rental car added', type: FleetDto })
  create(@Param('id', ParseUUIDPipe) id: string, @Body() createFleetDto: FleetDto) {
    return this.fleetService.create(id, createFleetDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Operation succedded', type: ListFleetDto })
  findAll(@Param('id', ParseUUIDPipe) id: string, @Param() payload: SearchFleetDto) {
    return this.fleetService.findAll(id, payload);
  }

  @Get(':fleetId')
  @ApiOkResponse({ description: 'Operation succedded', type: FleetDto })
  findOne(@Param('id', ParseUUIDPipe) id: string, @Param('fleetId', ParseUUIDPipe) fleetId: string) {
    return this.fleetService.findOne(id, fleetId);
  }

  @Put(':fleetId')
  @ApiOkResponse({ description: 'Fleet car updated', type: FleetDto })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Param('fleetId', ParseUUIDPipe) fleetId: string,
    @Body() updateFleetDto: FleetDto
  ) {
    return this.fleetService.update(id, fleetId, updateFleetDto);
  }

  @Delete(':fleetId')
  @ApiNoContentResponse({ description: 'Car removed from fleet.' })
  remove(@Param('id', ParseUUIDPipe) id: string, @Param('fleetId', ParseUUIDPipe) fleetId: string) {
    return this.fleetService.remove(id, fleetId);
  }
}
