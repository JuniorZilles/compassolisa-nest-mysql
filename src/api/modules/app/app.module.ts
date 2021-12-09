import { CarsModule } from '@modules/cars/cars.module';
import { PeopleModule } from '@modules/people/people.module';
import { RentalModule } from '@modules/rental/rental.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [CarsModule, PeopleModule, RentalModule],

})
export class AppModule {}
