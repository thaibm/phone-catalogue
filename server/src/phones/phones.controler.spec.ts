import { Test } from '@nestjs/testing';
import { DBModule } from '../db/db.module';
import { phoneProviders } from './phone.providers';
import { PhonesController } from './phones.controller';
import { PhonesService } from './phones.service';

describe('PhonesController', () => {
  let phonesController: PhonesController;
  let phonesService: PhonesService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        imports: [DBModule],
        controllers: [PhonesController],
        providers: [...phoneProviders, PhonesService],
      }).compile();

    phonesService = moduleRef.get<PhonesService>(PhonesService);
    phonesController = moduleRef.get<PhonesController>(PhonesController);
  });

  describe('findAll', () => {
    it('should return an array of phones', async () => {
      const result = ['test'];
      jest.spyOn(phonesService, 'findAll').mockImplementation(() => result);

      expect(await phonesController.findAll()).toBe(result);
    });
  });
});