import { Connection } from 'typeorm';

import { Phone } from './phone.entity';

export const phoneProviders = [{
  provide: 'PhoneRepositoryToken',
  useFactory: (connection: Connection) => connection.getRepository(Phone),
  inject: ['DbConnectionToken'],
}];