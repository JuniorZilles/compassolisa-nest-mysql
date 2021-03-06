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

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV === 'test' ? ['.env.test'] : ['.env']
    }),
    TypeOrmModule.forRoot({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT, 10),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [Car, Fleet, Rental, Reserve, Person, Accessory, Endereco],
      synchronize: process.env.NODE_ENV === 'test',
      logging: false
    })
  ]
})
export default class MysqlModule {}
