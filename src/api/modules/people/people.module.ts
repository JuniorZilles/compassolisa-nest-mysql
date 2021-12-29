import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import PeopleService from '@services/people/people.service';
import PeopleController from '@controllers/people/people.controller';
import PeopleGetValidationMiddleware from '@validations/people/getPeopleValidation';
import PeoplePostPutValidationMiddleware from '@validations/people/postPutPeopleValidation';
import IdValidationMiddleware from '@validations/idValidation';
import { TypeOrmModule } from '@nestjs/typeorm';
import PeopleRepository from '@repositories/people/people.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PeopleRepository])],
  controllers: [PeopleController],
  providers: [PeopleService]
})
export default class PeopleModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PeopleGetValidationMiddleware).forRoutes({ path: 'people', method: RequestMethod.GET });
    consumer.apply(PeoplePostPutValidationMiddleware).forRoutes({ path: 'people', method: RequestMethod.POST });
    consumer.apply(IdValidationMiddleware).forRoutes({ path: 'people/:id', method: RequestMethod.ALL });
    consumer.apply(PeoplePostPutValidationMiddleware).forRoutes({ path: 'people/:id', method: RequestMethod.PUT });
  }
}
