import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import AppModule from '@modules/app/app.module';
import cleanDatabase from '../../utils/cleanDatabase';
import { oneCar } from '../../utils/factory/car.factory';

describe('CarsController (e2e)', () => {
  let app: INestApplication;

  const carFactory = oneCar();
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });
  afterEach(async () => {
    await cleanDatabase();
  });

  it('/ (POST)', async () => {
    const response = await request(app.getHttpServer()).post('/cars').send(carFactory);

    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      ...carFactory,
      acessorios: expect.arrayContaining([
        {
          id: expect.any(String),
          descricao: expect.any(String),
          created_at: expect.any(String),
          updated_at: expect.any(String)
        }
      ]),
      id: expect.any(String),
      created_at: expect.any(String),
      updated_at: expect.any(String)
    });
  });
});
