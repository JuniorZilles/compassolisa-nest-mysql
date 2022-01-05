import CarsModule from '@modules/cars/cars.module';
import PeopleModule from '@modules/people/people.module';
import RentalModule from '@modules/rental/rental.module';
import { Module } from '@nestjs/common';
import MysqlModule from '@modules/database/mysql/mysql.module';

@Module({
  imports: [MysqlModule, CarsModule, PeopleModule, RentalModule]
})
export default class AppModule {}
