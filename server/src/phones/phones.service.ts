import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Phone } from './phone.interface';

@Injectable()
export class PhonesService {
  constructor( @Inject('PhoneRepositoryToken') private readonly phoneRepository: Repository<Phone>) { }

  async findAll(): Promise<Phone[]> {
    try {
      return await this.phoneRepository.find();
    } catch (err) {
      return err;
    }
  }

  async findById(id: number): Promise<Phone> {
    try {
      return await this.phoneRepository.findOneById(id);
    } catch (err) {
      return err;
    }
  }

  async create(phone: Phone) {
    try {
      return await this.phoneRepository.save(phone);
    } catch (err) {
      return err;
    }
  }

  async deleteOne(phoneId: string) {
    try {
      return await this.phoneRepository.removeById(phoneId);
    } catch (err) {
      return err;
    }
  }
}
