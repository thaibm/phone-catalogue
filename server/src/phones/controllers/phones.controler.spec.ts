import { Test } from '@nestjs/testing';
import { DBModule } from '../../db/db.module';
import { PhoneRepository } from '../repositories/phone.repository';
import { PhonesController } from './phones.controller';
import { PhonesService } from '../services/phones.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phone } from '../phone.interface';
import { CreatePhoneDto } from '../dtos/create-phone.dto';

const mockedPhoneService: Partial<PhonesService> = {
  create: jest.fn(),
  deleteOne: jest.fn(),
  findAll: jest.fn(),
  findById: jest.fn(),
};

describe('PhonesController', () => {
  let phoneService: PhonesService;
  let phonesController: PhonesController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [PhonesController],
      providers: [
        {
          provide: PhonesService,
          useValue: mockedPhoneService,
        },
      ],
    }).compile();

    phoneService = moduleRef.get<PhonesService>(PhonesService);
    phonesController = moduleRef.get<PhonesController>(PhonesController);
  });

  describe('findAll', () => {
    it('should return an array of phones', async () => {
      const result = [];
      jest
        .spyOn(phoneService, 'findAll')
        .mockResolvedValue(result);

      expect(await phonesController.findAll()).toEqual(result);
    });
  });

  describe('findById', () => {
    it('should return a phone', async () => {
      const result: Phone = {
        id: 1,
        name: '',
        manufacturer: '',
        description: '',
        color: '',
        price: 0,
        imageFileName: '',
        screen: '',
        processor: '',
        ram: '',
      };
      jest
        .spyOn(phoneService, 'findById')
        .mockResolvedValue(result);

      expect(await phonesController.findById(1)).toEqual(result);
    });
  });

  describe('create', () => {
    it('should create a phone', async () => {
      const result: CreatePhoneDto = {
        name: '',
        manufacturer: '',
        description: '',
        color: '',
        price: 0,
        imageFileName: '',
        screen: '',
        processor: '',
        ram: '',
      };
      jest
        .spyOn(phoneService, 'create')
        .mockResolvedValue({ ...result, id: 1 });

      expect(await phonesController.create(result)).toEqual({ ...result, id: 1 });
      expect(await phoneService.create).toHaveBeenCalledTimes(1);
      expect(await phoneService.create).toHaveBeenCalledWith(result);
    });
  });
});
