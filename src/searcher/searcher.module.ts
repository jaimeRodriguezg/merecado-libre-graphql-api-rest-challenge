import { Module } from '@nestjs/common';
import { SearcherService } from './searcher.service';
import { SearcherController } from './searcher.controller';
import { HttpModule } from '@nestjs/axios';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [HttpModule, CommonModule],
  controllers: [SearcherController],
  providers: [SearcherService],
})
export class SearcherModule {}
