import { ApiProperty } from '@nestjs/swagger';

export default class SearchFleetDto {
  @ApiProperty({
    description: 'Car id',
    required: false
  })
  id_carro?: string;

  @ApiProperty({
    description: 'Car status',
    required: false,
    enum: ['disponível', 'indisponível']
  })
  status?: string;

  @ApiProperty({
    description: 'Rental value per day',
    required: false,
    type: () => String,
    format: 'double',
    example: '100,00'
  })
  valor_diaria?: string | number;

  id_locadora?: string;

  @ApiProperty({
    description: 'Car plate',
    required: false
  })
  placa?: string;
}
