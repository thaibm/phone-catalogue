import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { PhonesModule } from '../src/phones/phones.module';
import { PhonesService } from '../src/phones/services/phones.service';
import { NestApplication } from '@nestjs/core';

describe('Phones', () => {
  let app: NestApplication;
  // tslint:disable-next-line: prefer-const
  let phonesService = { findAll: () => [] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [PhonesModule],
    })
      .overrideProvider(PhonesService)
      .useValue(phonesService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET phones`, () => {
    return request(app.getHttpServer())
      .get('/phones/')
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('data');
        expect(res.body.data).toEqual([]);
      })
  });

  afterAll(async () => {
    await app.close();
  });
});