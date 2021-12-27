import CreateAccessoryDto from '@dto/cars/cars.accessory/create-accessory.dto';
import { ApiProperty } from '@nestjs/swagger';

export default class CarDto {
  @ApiProperty({
    description: 'The car id',
    required: false,
    readOnly: true
  })
  id?: string;

  @ApiProperty({
    description: 'The car model'
  })
  modelo: string;

  @ApiProperty({
    description: 'The car color'
  })
  cor: string;

  @ApiProperty({
    description: 'The car year',
    minimum: 1950,
    maximum: 2022
  })
  ano: number;

  @ApiProperty({
    description: 'The car accessories',
    isArray: true,
    uniqueItems: true,
    minLength: 1,
    type: () => CreateAccessoryDto
  })
  acessorios: CreateAccessoryDto[];

  @ApiProperty({ description: 'Amount of car seats', minimum: 1 })
  quantidadePassageiros: number;
}
