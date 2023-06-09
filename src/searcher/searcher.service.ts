import { Injectable } from '@nestjs/common';

import { HttpService } from '@nestjs/axios';
import { HandleErrorService } from 'src/common/handle-errors.service';
import { SearcherResponse } from './entities/searcher.entity';
import { firstValueFrom } from 'rxjs';
import { GeneralItem } from 'src/common/entities/common.entity';
import { SearchQueryParameters, SearcherDto } from './dto/searcher.dto';

@Injectable()
export class SearcherService {
  constructor(
    private readonly httpService: HttpService,
    private readonly handleErrorService: HandleErrorService,
  ) {}

  async searcher(
    searchQueryParameters: SearchQueryParameters,
    searcherDto: SearcherDto,
  ): Promise<SearcherResponse> {
    const { name, lastName } = searcherDto;

    try {
      const encodedSearch = encodeURIComponent(searchQueryParameters.q);
      const response = await firstValueFrom(
        this.httpService.get(
          `${process.env.MERCADO_LIBRE_API}/sites/MLA/search?q=${encodedSearch}`,
        ),
      );

      return this.parseResponse(response.data, name, lastName);
    } catch (error) {
      this.handleErrorService.handleErrorExceptions(
        'SearcherService',
        'searcher',
        error,
      );
    }
  }

  parseResponse(
    response: any,
    name: string,
    lastName: string,
  ): SearcherResponse {
    const searchResponse = new SearcherResponse();

    searchResponse.author = { name, lastname: lastName };

    searchResponse.categories =
      response.filters
        .find((filter) => filter.id === 'category')
        ?.values[0].path_from_root.map((category) => category.name) || [];

    searchResponse.items = response.results.map((item) => {
      const parsedItem = new GeneralItem();

      parsedItem.id = item.id ?? '';
      parsedItem.title = item.title ?? '';
      parsedItem.price = {
        currency: item.currency_id ?? '',
        //redondeamos el numero hacia abajo ej: 124.34 --> 124
        amount: item.price ? Math.floor(item.price) : 0,
        // tomamos el módulo del item price y obteniendo la parte decimal, lo redondeamos a dos decimales
        decimals: item.price ? +(item.price % 1).toFixed(2) : 0,
      };
      parsedItem.thumbnail = item.thumbnail ?? '';
      parsedItem.condition = item.condition ?? '';
      parsedItem.free_shipping = item.shipping.free_shipping;

      return parsedItem;
    });

    return searchResponse;
  }
}
