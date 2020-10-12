
export interface Insert {
  OrdreID: number;
  BladID: number;
  email: string;
  kontrolleretAfDLU: boolean;
  ErrorID: number;
  SidePlacering: string;
}

export interface WebInsert {
  insert: Insert;
}
