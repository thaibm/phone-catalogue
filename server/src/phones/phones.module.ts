import { Module } from '@nestjs/common';

import { DBModule } from '../db/db.module';
import { PhonesController } from './phones.controller';
import { PhonesService } from './phones.service';
import { phoneProviders } from './phone.providers';

@Module({
  imports: [DBModule],
  controllers: [PhonesController],
  providers: [
    ...phoneProviders,
    PhonesService,
  ],
})

export class PhonesModule { }
