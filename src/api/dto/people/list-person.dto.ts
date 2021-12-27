import { ApiProperty } from '@nestjs/swagger';
import PersonDto from './person.dto';

export default class ListPersonDto {
  @ApiProperty({
    description: 'List of people',
    isArray: true,
    type: () => PersonDto
  })
  pessoas: PersonDto[];
}
