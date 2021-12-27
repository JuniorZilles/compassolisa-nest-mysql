import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import AccessoryService from '@services/cars/cars.accessory/accessory.service';
import CreateAccessoryDto from '@dto/cars/cars.accessory/create-accessory.dto';
import UpdateAccessoryDto from '@dto/cars/cars.accessory/update-accessory.dto';
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

@ApiTags('car.accessories')
@Controller({ path: '/cars/:id/accessory', version: '1' })
@ApiNotFoundResponse({ description: 'Accessory not found.' })
@ApiBadRequestResponse({ description: 'Bad Request.', type: ErrorDto, isArray: true })
@ApiInternalServerErrorResponse({ description: 'Internal Server Error.', type: ErrorDto, isArray: true })
export default class AccessoryController {
  constructor(private readonly accessoryService: AccessoryService) {}

  @Post()
  @ApiCreatedResponse({ type: CreateAccessoryDto, description: 'The accessory has been successfully created.' })
  create(@Param('id', ParseUUIDPipe) id: string, @Body() createAccessoryDto: CreateAccessoryDto) {
    return this.accessoryService.create(id, createAccessoryDto);
  }

  @Get()
  @ApiOkResponse({ type: CreateAccessoryDto, description: 'The accessory has been successfully retrieved.' })
  findAll(@Param('id', ParseUUIDPipe) id: string) {
    return this.accessoryService.findAll(id);
  }

  @Get(':accessoryId')
  @ApiOkResponse({ type: CreateAccessoryDto, description: 'The accessory has been successfully retrieved.' })
  findOne(@Param('id', ParseUUIDPipe) id: string, @Param('accessoryId', ParseUUIDPipe) accessoryId: string) {
    return this.accessoryService.findOne(id, accessoryId);
  }

  @Patch(':accessoryId')
  @ApiOkResponse({ description: 'Accessory successfully updated.' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Param('accessoryId', ParseUUIDPipe) accessoryId: string,
    @Body() updateAccessoryDto: UpdateAccessoryDto
  ) {
    return this.accessoryService.update(id, accessoryId, updateAccessoryDto);
  }

  @Delete(':accessoryId')
  @ApiNoContentResponse({ description: 'Accessory has been successfully removed.' })
  remove(@Param('id', ParseUUIDPipe) id: string, @Param('accessoryId', ParseUUIDPipe) accessoryId: string) {
    return this.accessoryService.remove(id, accessoryId);
  }
}
