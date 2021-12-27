import { ApiProperty } from '@nestjs/swagger';
import CepPayloadDto from './cep-payload.dto';

export default class EnderecoDto extends CepPayloadDto {
  @ApiProperty({
    description: 'Address id',
    readOnly: true
  })
  id?: string;

  @ApiProperty({
    description: 'Rental company name'
  })
  number: string;

  @ApiProperty({
    description: 'Rental company is filial',
    type: Boolean,
    default: false
  })
  isFilial: boolean;
}
