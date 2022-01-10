import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import CarsRepository from '@repositories/cars/cars.repository';
import CarsModule from '@modules/cars/cars.module';
import AccessoryRepository from '@repositories/cars/cars.accessory/accessory.repository';
import { oneCar } from '../../utils/factory/car.factory';
import { MOCKCARREPOSITORY } from '../../utils/mocks/cars.repository.mock';
import { MOCKACCESSORYREPOSITORY } from '../../utils/mocks/accessory.repository.mock';

describe('CarsController (e2e)', () => {
  let app: INestApplication;

  const carFactory = oneCar();
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CarsModule]
    })
      .overrideProvider(CarsRepository)
      .useValue(MOCKCARREPOSITORY)
      .overrideProvider(AccessoryRepository)
      .useValue(MOCKACCESSORYREPOSITORY)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (POST)', async () => {
    const response = await request(app.getHttpServer()).post('/cars').send(carFactory);

    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      ...carFactory,
      id: expect.any(String),
      created_at: expect.any(String),
      updated_at: expect.any(String)
    });
  });
});
