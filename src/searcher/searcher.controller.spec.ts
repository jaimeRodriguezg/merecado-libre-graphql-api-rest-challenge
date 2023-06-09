import { Test, TestingModule } from '@nestjs/testing';
import { SearcherController } from './searcher.controller';
import { SearcherService } from './searcher.service';

describe('SearcherController', () => {
  let controller: SearcherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearcherController],
      providers: [SearcherService],
    }).compile();

    controller = module.get<SearcherController>(SearcherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
