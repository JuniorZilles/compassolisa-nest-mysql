import { PartialType } from '@nestjs/swagger';
import CreateAccessoryDto from './accessory.dto';

export default class UpdateAccessoryDto extends PartialType(CreateAccessoryDto) {}
