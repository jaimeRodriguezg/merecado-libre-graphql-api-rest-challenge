import { Body, Controller, Param, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { FindItemDto } from './dto/find-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post(':id')
  create(@Param('id') id: string, @Body() findItemDto: FindItemDto) {
    return this.itemsService.findItems(id, findItemDto);
  }
}
