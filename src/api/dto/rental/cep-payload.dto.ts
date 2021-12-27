import { ApiProperty } from '@nestjs/swagger';

export default class CepPayloadDto {
  @ApiProperty({
    description: 'Rental company CEP'
  })
  cep: string;

  @ApiProperty({
    required: false,
    description: 'Rental company street',
    readOnly: true
  })
  logradouro?: string;

  @ApiProperty({
    required: false,
    description: 'Rental company address complement'
  })
  complemento?: string;

  @ApiProperty({
    required: false,
    readOnly: true,
    description: 'Rental company district'
  })
  bairro?: string;

  @ApiProperty({
    required: false,
    readOnly: true,
    description: 'Rental company city'
  })
  localidade?: string;

  @ApiProperty({
    required: false,
    readOnly: true,
    description: 'Rental company UF'
  })
  uf?: string;
}
