import { Controller, Get, Post, Body, Param, Delete, ParseUUIDPipe, Put } from '@nestjs/common';
import ReserveService from '@services/rental/rental.reserve/reserve.service';
import ReserveDto from '@dto/rental/rental.reserve/reserve.dto';
import SearchReserveDto from '@dto/rental/rental.reserve/search-reserve.dto';
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
import ListReserveDto from '@dto/rental/rental.reserve/list-reserve.dto';

@ApiTags('rental.reserve')
@Controller({ path: '/rental/:id/reserve', version: '1' })
@ApiBadRequestResponse({ description: 'Bad Request.', type: ErrorDto, isArray: true })
@ApiNotFoundResponse({ description: 'The reservation was not found.', type: ErrorDto, isArray: true })
@ApiInternalServerErrorResponse({ description: 'Internal Server Error.', type: ErrorDto, isArray: true })
export default class ReserveController {
  constructor(private readonly reserveService: ReserveService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Reservation created.', type: ReserveDto })
  create(@Param('id', ParseUUIDPipe) id: string, @Body() createReserveDto: ReserveDto) {
    return this.reserveService.create(id, createReserveDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Operation succeeded.', type: ListReserveDto })
  findAll(@Param('id', ParseUUIDPipe) id: string, @Param() payload: SearchReserveDto) {
    return this.reserveService.findAll(id, payload);
  }

  @Get(':reservetId')
  @ApiOkResponse({ description: 'Operation succeeded.', type: ReserveDto })
  findOne(@Param('id', ParseUUIDPipe) id: string, @Param('reservetId', ParseUUIDPipe) reservetId: string) {
    return this.reserveService.findOne(id, reservetId);
  }

  @Put(':reservetId')
  @ApiOkResponse({ description: 'Reservation updated.', type: ReserveDto })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Param('reservetId', ParseUUIDPipe) reservetId: string,
    @Body() updateReserveDto: ReserveDto
  ) {
    return this.reserveService.update(id, reservetId, updateReserveDto);
  }

  @Delete(':reservetId')
  @ApiNoContentResponse({ description: 'Reservation canceled.' })
  remove(@Param('id', ParseUUIDPipe) id: string, @Param('reservetId', ParseUUIDPipe) reservetId: string) {
    return this.reserveService.remove(id, reservetId);
  }
}
