import { ApiProperty } from '@nestjs/swagger';

export default class SearchRentalDto {
  @ApiProperty({
    required: false,
    description: 'Rental company name'
  })
  nome?: string;

  @ApiProperty({
    required: false,
    description: 'Rental company CNPJ'
  })
  cnpj?: string;

  @ApiProperty({
    required: false,
    description: 'Rental company activities'
  })
  atividades?: string;

  @ApiProperty({
    required: false,
    description: 'Rental company UF'
  })
  uf?: string;

  'endereco.uf'?: string;

  @ApiProperty({
    required: false,
    description: 'Rental company CEP'
  })
  cep?: string;

  'endereco.cep'?: string;

  @ApiProperty({
    required: false,
    description: 'Rental company street'
  })
  logradouro?: string;

  'endereco.logradouro'?: string;

  @ApiProperty({
    required: false,
    description: 'Rental company address complement'
  })
  complemento?: string;

  'endereco.complemento'?: string;

  @ApiProperty({
    required: false,
    description: 'Rental company district'
  })
  bairro?: string;

  'endereco.bairro'?: string;

  @ApiProperty({
    required: false,
    description: 'Rental company number'
  })
  number?: string;

  'endereco.number'?: string;

  @ApiProperty({
    required: false,
    description: 'Rental company city'
  })
  localidade?: string;

  'endereco.localidade'?: string;
}
