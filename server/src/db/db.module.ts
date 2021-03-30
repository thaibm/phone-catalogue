import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { dbProvider } from './db.providers';

@Module({
  imports: [ConfigModule],
  providers: [dbProvider],
  exports: [dbProvider],
})
export class DBModule { }
