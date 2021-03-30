import { Provider } from '@nestjs/common';
import { createConnection } from 'typeorm';

import { Phone } from '../phones/phone.entity';

export const dbProvider: Provider =
  {
    provide: 'DbConnectionToken',
    useFactory: async () => await createConnection({
      type: process.env.DB_TYPE as any,
      database: process.env.DATABASE,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PW,
      entities: [
        Phone,
      ],
      synchronize: true, // DEV only, do not use on PROD!
    }),
  };
