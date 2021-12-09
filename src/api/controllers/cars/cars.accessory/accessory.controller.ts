import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AccessoryService } from '@services/cars/cars.accessory/accessory.service';
import { CreateAccessoryDto } from '@dto/cars/cars.accessory/create-accessory.dto';
import { UpdateAccessoryDto } from '@dto/cars/cars.accessory/update-accessory.dto';

@Controller('cars/:id/accessory')
export class AccessoryController {
  constructor(private readonly accessoryService: AccessoryService) {}

  @Post()
  create(@Body() createAccessoryDto: CreateAccessoryDto) {
    return this.accessoryService.create(createAccessoryDto);
  }

  @Get()
  findAll() {
    return this.accessoryService.findAll();
  }

  @Get(':accessoryId')
  findOne(@Param('accessoryId', ParseIntPipe) accessoryId: number) {
    return this.accessoryService.findOne(accessoryId);
  }

  @Patch(':accessoryId')
  update(@Param('accessoryId', ParseIntPipe) accessoryId: number, @Body() updateAccessoryDto: UpdateAccessoryDto) {
    return this.accessoryService.update(accessoryId, updateAccessoryDto);
  }

  @Delete(':accessoryId')
  remove(@Param('accessoryId', ParseIntPipe) accessoryId: number) {
    return this.accessoryService.remove(accessoryId);
  }
}
