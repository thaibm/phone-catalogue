import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Phone } from '../phone.interface';
import { PhoneRepository } from '../repositories/phone.repository';

@Injectable()
export class PhonesService {
  constructor(private readonly phoneRepository: PhoneRepository) { }

  async findAll(): Promise<Phone[]> {
    return await this.phoneRepository.find();
  }

  async findById(id: number): Promise<Phone> {
    return await this.phoneRepository.findOne(id);
  }

  async create(phone: Partial<Phone>): Promise<Phone> {
    const entity = this.phoneRepository.create(phone);
    return await this.phoneRepository.save(entity);
  }

  async update(id: number, phone: Partial<Phone>): Promise<Phone> {
    const entity = this.phoneRepository.create(phone);
    return await this.phoneRepository.save(entity);
  }

  async deleteOne(phoneId: number) {
    return await this.phoneRepository.delete(phoneId);
  }
}
