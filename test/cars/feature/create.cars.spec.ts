import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import CarsRepository from '@repositories/cars/cars.repository';
import AppModule from '@modules/app/app.module';
import { MOCKCARREPOSITORY } from '../../utils/mocks/cars.repository.mock';
import { oneCar } from '../../utils/factory/car.factory';

describe('CarsController (e2e)', () => {
  let app: INestApplication;

  const carFactory = oneCar();
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    })
      .overrideProvider(CarsRepository)
      .useValue(MOCKCARREPOSITORY)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (POST)', async () => {
    const response = await request(app.getHttpServer()).post('/cars').send(carFactory);
    console.log(response.body);

    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      ...carFactory,
      id: expect.any(String),
      created_at: expect.any(String),
      updated_at: expect.any(String)
    });
  });
});
