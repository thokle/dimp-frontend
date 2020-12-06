
export interface Insert {
  OrdreID: number;
  BladID: number;
  email: string;
  kontrolleretAfDLU: boolean;
  ErrorID: number;
  SidePlacering: string;
}
//{"insert":{"OrdreID":0,"BladID":0,"email":"String","kontrolleretAfDLU":false,"ErrorID":0,"SidePlacering":"String"}}
export interface WebInsert {
  insert: Insert;
}

