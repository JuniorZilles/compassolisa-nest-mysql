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
import RentalService from '@services/rental/rental.service';
import RentalDto from '@dto/rental/rental.dto';
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
import SearchRentalDto from '@dto/rental/search-rental.dto';
import ListRentalDto from '@dto/rental/list-rental.dto';

@ApiTags('rental')
@Controller({ path: '/rental', version: '1' })
@UseInterceptors(ClassSerializerInterceptor)
@ApiBadRequestResponse({ description: 'Bad Request.', type: ErrorDto, isArray: true })
@ApiInternalServerErrorResponse({ description: 'Internal Server Error.', type: ErrorDto, isArray: true })
export default class RentalController {
  constructor(private readonly rentalService: RentalService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Rental created.', type: RentalDto })
  create(@Body() createRentalDto: RentalDto) {
    return this.rentalService.create(createRentalDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Operation succeeded.', type: ListRentalDto })
  findAll(@Param() payload: SearchRentalDto) {
    return this.rentalService.findAll(payload);
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Operation succeeded.', type: RentalDto })
  @ApiNotFoundResponse({ description: 'The rental company was not found.', type: ErrorDto, isArray: true })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.rentalService.findOne(id);
  }

  @Put(':id')
  @ApiOkResponse({ description: 'Rental company updated.', type: RentalDto })
  @ApiNotFoundResponse({ description: 'The rental company was not found.', type: ErrorDto, isArray: true })
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateRentalDto: RentalDto) {
    return this.rentalService.update(id, updateRentalDto);
  }

  @Delete(':id')
  @ApiNoContentResponse({ description: 'Rental company removed.' })
  @ApiNotFoundResponse({ description: 'The rental company was not found.', type: ErrorDto, isArray: true })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.rentalService.remove(id);
  }
}
