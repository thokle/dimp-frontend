export interface PriceWeb {
  bladID: number;
  PlaceringID: number;
  År: number;
  PrislisteID: number;
  FormatFra: number;
  FormatTil: number;
  mmPris: number;
  FarvePris: number;
  FarveMin: number;
  FarveMax: number;
  Farve4Pris: number;
  Farve4Min: number;
  Farve4Max: number;
  ControlNavn: string;
  ErMeldInd: boolean;
}

export interface Price {
  priceWeb: PriceWeb;
}
