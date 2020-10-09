
export interface UdsendingKontakter {
  id: number;
  bladid: number;
  navn: string;
  mail: string;
  telefonnummer: number;
  type: number;
  titel: number;
}

export interface RootObjectUdsendingKontakter {
  udsendingKontakter: UdsendingKontakter;
}
