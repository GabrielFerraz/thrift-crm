import { Test, TestingModule } from '@nestjs/testing';
import { ConsignorsController } from './consignors.controller';
import { ConsignorsService } from './consignors.service';

describe('ConsignorsController', () => {
  let controller: ConsignorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsignorsController],
      providers: [ConsignorsService],
    }).compile();

    controller = module.get<ConsignorsController>(ConsignorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
