import { Module } from '@nestjs/common';

import { PhonesModule } from './phones/phones.module';
import { ConfigModule } from '@nestjs/config';
import { DBModule } from './db/db.module';
@Module({
  imports: [ConfigModule.forRoot(), DBModule, PhonesModule],
})
export class AppModule {}
