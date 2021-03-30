import { Module } from '@nestjs/common';

import { PhonesModule } from './phones/phones.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot(), PhonesModule],
})
export class ApplicationModule {}
