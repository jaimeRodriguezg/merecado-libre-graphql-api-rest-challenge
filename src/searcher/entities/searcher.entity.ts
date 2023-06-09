import { Author, GeneralItem } from 'src/common/entities/common.entity';

export class SearcherResponse {
  author: Author;
  categories: string[];
  items: GeneralItem[];
}
