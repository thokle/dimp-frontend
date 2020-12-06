
export interface UdsendingKontakter {
  Name;
  Email;
  KontaktType;
  Telefonnummer;
  BladId;
  Id;
  Titel;
  KontaktTyper: KontaktTyper[]
  KontaktTitlers: KontaktTitlers[]
}

export interface  KontaktTyper {
  id;
  titel;
}

export  interface  KontaktTitlers{
  id;
  Titel;
}

