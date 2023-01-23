import { Test, TestingModule } from '@nestjs/testing';
import { LakesController } from './lakes.controller';

describe('LakesController', () => {
  let controller: LakesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LakesController],
    }).compile();

    controller = module.get<LakesController>(LakesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
