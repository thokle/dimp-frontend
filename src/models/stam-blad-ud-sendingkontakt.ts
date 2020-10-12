
  export interface KontaktTyper {
    id;
    titel;
  }

  export interface KontaktTitler {
    id;
    Titel;
  }

  export interface StamBladUdSendingKontakt {
    Name: string;
    Email: string;
    KontaktType: string;
    telefonnummer: number;
    BladId: number;
    Id: number;
    Title: string;
    kontaktTyper: KontaktTyper[];
    kontaktTitlers: KontaktTitler[];
  }



