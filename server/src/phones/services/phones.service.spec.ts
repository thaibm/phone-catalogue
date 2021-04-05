import { Test } from '@nestjs/testing';
import { DBModule } from '../../db/db.module';
import { PhoneRepository } from '../repositories/phone.repository';
import { PhonesService } from '../services/phones.service';
import { Phone } from '../phone.interface';

const mockedPhoneRepository: Partial<PhoneRepository> = {
  save: jest.fn(),
  clear: jest.fn(),
  count: jest.fn(),
  create: jest.fn(),
  createQueryBuilder: jest.fn(),
  decrement: jest.fn(),
  delete: jest.fn(),
  find: jest.fn(),
  findAndCount: jest.fn(),
  findByIds: jest.fn(),
  findOne: jest.fn(),
  findOneOrFail: jest.fn(),
  getId: jest.fn(),
  hasId: jest.fn(),
  increment: jest.fn(),
  insert: jest.fn(),
  merge: jest.fn(),
  preload: jest.fn(),
  query: jest.fn(),
  recover: jest.fn(),
  remove: jest.fn(),
  restore: jest.fn(),
  softDelete: jest.fn(),
  softRemove: jest.fn(),
  target: jest.fn(),
  update: jest.fn(),
};

describe('PhonesService', () => {
  let phoneRepository: PhoneRepository;
  let phonesService: PhonesService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [],
      providers: [
        {
          provide: PhoneRepository,
          useValue: mockedPhoneRepository,
        },
        PhonesService,
      ],
    }).compile();

    phoneRepository = moduleRef.get<PhoneRepository>(PhoneRepository);
    phonesService = moduleRef.get<PhonesService>(PhonesService);
  });

  describe('findAll', () => {
    it('should return an array of phones', async () => {
      const result = [];
      jest.spyOn(phoneRepository, 'find').mockResolvedValue(result);

      expect(await phonesService.findAll()).toBe(result);
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
      jest.spyOn(phoneRepository, 'findOne').mockResolvedValue(result);

      expect(await phonesService.findById(1)).toBe(result);
    });
  });

  describe('create', () => {
    it('should create a phone', async () => {
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

      jest.spyOn(phoneRepository, 'save').mockResolvedValue(result);
      jest.spyOn(phoneRepository, 'create').mockReturnValue(result);

      expect(await phonesService.create(result)).toBe(result);
      expect(phoneRepository.save).toHaveBeenCalledTimes(1);
      expect(phoneRepository.save).toHaveBeenCalledWith(result);
    });
  });

  describe('deleteOne', () => {
    it('should delete a phone', async () => {
      jest.spyOn(phoneRepository, 'delete').mockResolvedValue({
        raw: {},
        affected: 1,
      });

      expect(await phonesService.deleteOne(1)).toBeTruthy();
      expect(phoneRepository.delete).toHaveBeenCalledTimes(1);
      expect(phoneRepository.delete).toHaveBeenCalledWith(1);
    });
  });
});
