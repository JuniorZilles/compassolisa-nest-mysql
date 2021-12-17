import { PartialType } from '@nestjs/swagger';
import CreateAccessoryDto from './create-accessory.dto';

export default class UpdateAccessoryDto extends PartialType(CreateAccessoryDto) {}
