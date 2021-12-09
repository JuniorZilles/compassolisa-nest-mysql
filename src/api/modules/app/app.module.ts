import { CarsModule } from '@modules/cars/cars.module';
import { PeopleModule } from '@modules/people/people.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [CarsModule, PeopleModule],

})
export class AppModule {}
