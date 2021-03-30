import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { PhonesModule } from '../../src/phones/phones.module';
import { PhonesService } from '../../src/phones/phones.service';
import { NestApplication  } from '@nestjs/core';

describe('Phones', () => {
  let app: NestApplication;
  // tslint:disable-next-line: prefer-const
  let phonesService = { findAll: () => ['test'] };

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
      .get('/phones')
      .expect(200)
      .expect({
        data: phonesService.findAll(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});