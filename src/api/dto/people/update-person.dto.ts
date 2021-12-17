import { PartialType } from '@nestjs/swagger';
import CreatePersonDto from './create-person.dto';

export default class UpdatePersonDto extends PartialType(CreatePersonDto) {}
