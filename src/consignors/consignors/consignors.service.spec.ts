import { Test, TestingModule } from '@nestjs/testing';
import { ConsignorsService } from './consignors.service';

describe('ConsignorsService', () => {
  let service: ConsignorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsignorsService],
    }).compile();

    service = module.get<ConsignorsService>(ConsignorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
