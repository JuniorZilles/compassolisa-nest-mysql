import { ApiProperty } from '@nestjs/swagger';

export default class PersonDto {
  @ApiProperty({
    description: 'Person id',
    required: false,
    readOnly: true
  })
  id?: string;

  @ApiProperty({
    description: 'Person name'
  })
  nome: string;

  @ApiProperty({
    description: 'Person CPF'
  })
  cpf: string;

  @ApiProperty({
    description: 'Person birth date',
    example: '14/11/1994'
  })
  data_nascimento: string;

  @ApiProperty({
    description: 'Person email'
  })
  email: string;

  @ApiProperty({
    description: 'Person password',
    writeOnly: true
  })
  senha: string;

  @ApiProperty({
    description: 'Person is habilitated',
    enum: ['sim', 'não']
  })
  habilitado: string;
}
