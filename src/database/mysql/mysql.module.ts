import Car from '@entities/cars/car.entity';
import Accessory from '@entities/cars/cars.accessory/accessory.entity';
import Person from '@entities/people/person.entity';
import Endereco from '@entities/rental/endereco.entity';
import Rental from '@entities/rental/rental.entity';
import Fleet from '@entities/rental/rental.fleet/fleet.entity';
import Reserve from '@entities/rental/rental.reserve/reserve.entity';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import CarsRepository from '@repositories/cars/cars.repository';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT, 10),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [Car, Person, Rental, Fleet, Reserve, Accessory, Endereco],
      synchronize: true,
      logging: false
    })
  ],
  providers: [CarsRepository],
  exports: [CarsRepository]
})
export default class MysqlModule {}
