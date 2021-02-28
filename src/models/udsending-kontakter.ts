
export interface UdsendingKontakter {
  Name;
  Email;
  KontaktType;
  Telefonnummer;
  BladId;
  Id?;
  Titel;
  KontaktTyper?: KontaktTyper[]
  KontaktTitlers?: KontaktTitlers[]
}

export interface  KontaktTyper {
  Id;
  Titel;
}

export  interface  KontaktTitlers{
  TitelID;
  Titel;
}


