import { Author, GeneralItem } from 'src/common/entities/common.entity';

export class Picture {
  id: string;
  url: string;
}

export class Item extends GeneralItem {
  sold_quantity: number;
  description: string;
  pictures: Picture[];
}

export class ItemResponse {
  author: Author;
  item: Item;
}
