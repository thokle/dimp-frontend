

  export interface Priser {
    bladID: number;
    farve4Max: number;
    farve4Min: number;
    farve4Pris: number;
    farveMax: number;
    farveMin: number;
    farvePris: number;
    formatFra: number;
    formatTil: number;
    mmPris: number;
    placeringID: number;
    prislisteID: number;
    year: number;
    placeringsNavn: string;
  }

  export interface Placeringer {
    betegnelse: string;
  }

  export interface Blad {
    bladID: number;
    navn: string;
    tempPriser: Priser[];
    placeringer: Placeringer[];
  }



