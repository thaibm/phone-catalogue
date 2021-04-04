import { Module } from '@nestjs/common';

import { DBModule } from '../db/db.module';
import { PhonesController } from './controllers/phones.controller';
import { PhonesService } from './services/phones.service';
import { PhoneRepository } from './repositories/phone.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [DBModule, TypeOrmModule.forFeature([PhoneRepository])],
  controllers: [PhonesController],
  providers: [
    PhonesService,
  ],
})

export class PhonesModule { }
