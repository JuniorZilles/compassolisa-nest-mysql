import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ReserveService } from '@services/rental/rental.reserve/reserve.service';
import { CreateReserveDto } from '@dto/rental/rental.reserve/create-reserve.dto';
import { UpdateReserveDto } from '@dto/rental/rental.reserve/update-reserve.dto';

@Controller('rental/:id/reserve')
export class ReserveController {
  constructor(private readonly reserveService: ReserveService) {}

  @Post()
  create(@Body() createReserveDto: CreateReserveDto) {
    return this.reserveService.create(createReserveDto);
  }

  @Get()
  findAll() {
    return this.reserveService.findAll();
  }

  @Get(':reservetId')
  findOne(@Param('reservetId', ParseIntPipe) reservetId: number) {
    return this.reserveService.findOne(reservetId);
  }

  @Patch(':reservetId')
  update(@Param('reservetId', ParseIntPipe) reservetId: number, @Body() updateReserveDto: UpdateReserveDto) {
    return this.reserveService.update(reservetId, updateReserveDto);
  }

  @Delete(':reservetId')
  remove(@Param('reservetId', ParseIntPipe) reservetId: number) {
    return this.reserveService.remove(reservetId);
  }
}
