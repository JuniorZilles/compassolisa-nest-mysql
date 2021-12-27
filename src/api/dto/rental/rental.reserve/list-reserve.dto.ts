import { ApiProperty } from '@nestjs/swagger';
import ReserveDto from './reserve.dto';

export default class ListReserveDto {
  @ApiProperty({
    description: 'List of reservations of a rental company',
    isArray: true,
    type: () => ReserveDto
  })
  reservas: ReserveDto[];
}
