import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  ParseUUIDPipe,
  UseInterceptors,
  ClassSerializerInterceptor,
  Query
} from '@nestjs/common';
import CarsService from '@services/cars/cars.service';
import CarDto from '@dto/cars/car.dto';
import SearchCarDto from '@dto/cars/search-car.dto';
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
import ListCarDto from '@dto/cars/list-car.dto';

@ApiTags('cars')
@Controller({ path: '/cars', version: '1' })
@UseInterceptors(ClassSerializerInterceptor)
@ApiBadRequestResponse({ description: 'Bad Request.', type: ErrorDto, isArray: true })
@ApiInternalServerErrorResponse({ description: 'Internal Server Error.', type: ErrorDto, isArray: true })
export default class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  @ApiCreatedResponse({ description: 'The car has been successfully created.', type: CarDto })
  create(@Body() createCarDto: CarDto) {
    return this.carsService.create(createCarDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Operation succeeded.', type: ListCarDto })
  findAll(@Query() payload: SearchCarDto) {
    return this.carsService.findAll(payload);
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Operation succeeded.', type: CarDto })
  @ApiNotFoundResponse({ description: 'The car was not found.', type: ErrorDto, isArray: true })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findById(id);
  }

  @Put(':id')
  @ApiOkResponse({ description: 'Operation succeeded.', type: CarDto })
  @ApiNotFoundResponse({ description: 'The car was not found.', type: ErrorDto, isArray: true })
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateCarDto: CarDto) {
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id')
  @ApiNoContentResponse({ description: 'Car removed.' })
  @ApiNotFoundResponse({ description: 'The car was not found.', type: ErrorDto, isArray: true })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.remove(id);
  }
}
