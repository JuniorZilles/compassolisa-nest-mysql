import { ApiProperty } from '@nestjs/swagger';
import FleetDto from './fleet.dto';

export default class ListFleetDto {
  @ApiProperty({
    description: 'List of cars of a rental company',
    isArray: true,
    type: () => FleetDto
  })
  frota: FleetDto[];
}
