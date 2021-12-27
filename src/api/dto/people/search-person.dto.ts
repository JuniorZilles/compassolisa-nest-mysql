import { ApiProperty } from '@nestjs/swagger';

export default class SearchPersonDto {
  @ApiProperty({
    description: 'Person name',
    required: false
  })
  nome?: string;

  @ApiProperty({
    description: 'Person name',
    required: false
  })
  cpf?: string;

  @ApiProperty({
    description: 'Person birth date',
    example: '14/11/1994',
    required: false
  })
  data_nascimento?: string;

  @ApiProperty({
    description: 'Person email',
    required: false
  })
  email?: string;

  @ApiProperty({
    description: 'Person is habilitated',
    enum: ['sim', 'não'],
    required: false
  })
  habilitado?: string;
}
