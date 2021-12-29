import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseUUIDPipe,
  Put,
  ClassSerializerInterceptor,
  UseInterceptors
} from '@nestjs/common';
import PeopleService from '@services/people/people.service';
import PersonDto from '@dto/people/person.dto';
import SearchPersonDto from '@dto/people/search-person.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags
} from '@nestjs/swagger';
import ErrorDto from '@dto/error.dto';
import ListPersonDto from '@dto/people/list-person.dto';

@ApiTags('people')
@Controller({ path: '/people', version: '1' })
@UseInterceptors(ClassSerializerInterceptor)
@ApiBadRequestResponse({ description: 'Bad Request.', type: ErrorDto, isArray: true })
@ApiInternalServerErrorResponse({ description: 'Internal Server Error.', type: ErrorDto, isArray: true })
export default class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Person created.', type: PersonDto })
  create(@Body() createPersonDto: PersonDto) {
    return this.peopleService.create(createPersonDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Operation succeeded.', type: ListPersonDto })
  findAll(@Param() payload: SearchPersonDto) {
    return this.peopleService.findAll(payload);
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Operation succeeded.', type: PersonDto })
  @ApiNotFoundResponse({ description: 'The Person was not found.', type: ErrorDto, isArray: true })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.peopleService.findOne(id);
  }

  @Put(':id')
  @ApiOkResponse({ description: 'Operation succeeded.', type: PersonDto })
  @ApiNotFoundResponse({ description: 'The Person was not found.', type: ErrorDto, isArray: true })
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updatePersonDto: PersonDto) {
    return this.peopleService.update(id, updatePersonDto);
  }

  @Delete(':id')
  @ApiNoContentResponse({ description: 'Person removed.' })
  @ApiNotFoundResponse({ description: 'The Person was not found.', type: ErrorDto, isArray: true })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.peopleService.remove(id);
  }
}
