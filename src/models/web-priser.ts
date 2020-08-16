

  export interface Priser {
    bladID: number;
    Farve4Max: number;
    Farve4Min: number;
    Farve4Pris: number;
    FarveMax: number;
    FarveMin: number;
    FarvePris: number;
    FormatFra: number;
    FormatTil: number;
    mmPris: number;
    PlaceringID: number;
    PrislisteID: number;
    Year: number;
    PlaceringsNavn: string;
  }

  export interface Placeringer {
    betegnelse: string;
  }

  export interface Blad {
    bladID: number;
    Nbgavn: string;
    tempPriser: Priser[];
    placeringer: Placeringer[];
  }



