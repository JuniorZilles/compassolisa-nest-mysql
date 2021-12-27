import { ApiProperty } from '@nestjs/swagger';
import EnderecoDto from './endereco.dto';

export default class RentalDto {
  @ApiProperty({
    description: 'Rental id',
    readOnly: true
  })
  id?: string;

  @ApiProperty({
    description: 'Rental company name'
  })
  nome: string;

  @ApiProperty({
    description: 'Rental company CNPJ'
  })
  cnpj: string;

  @ApiProperty({
    description: 'Rental company activities'
  })
  atividades: string;

  @ApiProperty({
    description: 'The rental company address',
    isArray: true,
    minLength: 1,
    type: () => EnderecoDto
  })
  endereco: EnderecoDto[];
}
