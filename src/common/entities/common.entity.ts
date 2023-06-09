export class Author {
  name: string;
  lastname: string;
}

export class Price {
  currency: string;

  amount: number;

  decimals: number;
}

export class GeneralItem {
  id: string;

  title: string;

  price: Price;

  thumbnail: string;

  condition: string;

  free_shipping: boolean;
}
