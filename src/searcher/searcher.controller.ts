import { Controller, Post, Body, Param, Query } from '@nestjs/common';
import { SearcherService } from './searcher.service';
import { SearchQueryParameters, SearcherDto } from './dto/searcher.dto';

@Controller('items')
export class SearcherController {
  constructor(private readonly searcherService: SearcherService) {}

  @Post()
  create(
    @Query() searchQueryParameters: SearchQueryParameters,
    @Body() searcherDto: SearcherDto,
  ) {
    return this.searcherService.searcher(searchQueryParameters, searcherDto);
  }
}
