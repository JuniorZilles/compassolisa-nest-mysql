import { PartialType } from '@nestjs/swagger';
import CreateFleetDto from './create-fleet.dto';

export default class UpdateFleetDto extends PartialType(CreateFleetDto) {}
