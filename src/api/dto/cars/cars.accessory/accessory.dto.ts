import { ApiProperty } from '@nestjs/swagger';

export default class AccessoryDto {
  @ApiProperty({
    description: 'The car accessory name'
  })
  descricao: string;

  @ApiProperty({
    description: 'The car accessory id',
    required: false,
    readOnly: true
  })
  id?: string;
}
