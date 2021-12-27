import { ApiProperty } from '@nestjs/swagger';
import CarDto from './car.dto';

export default class ListCarDto {
  @ApiProperty({
    description: 'List of cars',
    isArray: true,
    type: () => CarDto
  })
  veiculos: CarDto[];
}
