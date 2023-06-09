import { IsString, MinLength, MaxLength } from 'class-validator';
export class SearcherDto {
  @IsString()
  @MinLength(1)
  @MaxLength(500)
  name: string;

  @IsString()
  @MinLength(1)
  @MaxLength(500)
  lastName: string;
}

export class SearchQueryParameters {
  @IsString()
  q: string;
}
