import { ApiProperty } from '@nestjs/swagger';

export default class SearchCarDto {
  @ApiProperty({
    required: false,
    description: 'The car model'
  })
  modelo?: string;

  @ApiProperty({
    required: false,
    description: 'The car color'
  })
  cor?: string;

  @ApiProperty({
    required: false,
    description: 'The car year',
    minimum: 1950,
    maximum: 2022
  })
  ano?: number;

  @ApiProperty({ description: 'Amount of car seats', minimum: 1, required: false })
  quantidadePassageiros?: number;

  @ApiProperty({
    required: false,
    description: 'The car accessory descritpion'
  })
  descricao?: string;

  'acessorios.descricao'?: string;
}
