import { PartialType } from '@nestjs/mapped-types';
import CreateCarDto from './create-car.dto';

export default class UpdateCarDto extends PartialType(CreateCarDto) {}
