import { ApiProperty } from '@nestjs/swagger';
import RentalDto from './rental.dto';

export default class ListRentalDto {
  @ApiProperty({
    description: 'List of rental companies',
    isArray: true,
    type: () => RentalDto
  })
  locadoras: RentalDto[];
}
