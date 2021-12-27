import { ApiProperty } from '@nestjs/swagger';

export default class ReserveDto {
  @ApiProperty({
    description: 'Reservation id',
    readOnly: true
  })
  id?: string;

  @ApiProperty({
    description: 'Person id',
    readOnly: true
  })
  id_user?: string;

  @ApiProperty({
    description: 'Begining of the reservation',
    type: () => String,
    format: 'date',
    example: '27/12/2021'
  })
  data_inicio: string;

  @ApiProperty({
    description: 'End of the reservation',
    type: () => String,
    format: 'date',
    example: '30/12/2021'
  })
  data_fim: string;

  @ApiProperty({
    description: 'Fleet id'
  })
  id_carro: string;

  @ApiProperty({
    description: 'Rental id',
    readOnly: true
  })
  id_locadora?: string;

  @ApiProperty({
    description: 'Calculated rental value',
    required: false,
    type: () => String,
    format: 'double',
    example: '100,00'
  })
  valor_final: number | string;
}
