import { ApiProperty } from '@nestjs/swagger';

export default class FleetDto {
  @ApiProperty({
    description: 'Fleet id',
    readOnly: true
  })
  id?: string;

  @ApiProperty({
    description: 'Car id'
  })
  id_carro: string;

  @ApiProperty({
    description: 'Car status',
    enumName: 'statusEnum',
    enum: ['disponível', 'indisponível']
  })
  status: string;

  @ApiProperty({
    description: 'Rental value per day',
    type: () => String,
    format: 'double',
    example: '100,00'
  })
  valor_diaria: number | string;

  @ApiProperty({
    description: 'Rental id',
    readOnly: true
  })
  id_locadora?: string;

  @ApiProperty({
    description: 'Car plate'
  })
  placa: string;
}
