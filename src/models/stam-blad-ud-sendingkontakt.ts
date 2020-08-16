
  export interface KontaktTyper {
    id: number;
    titel: string;
  }

  export interface KontaktTitler {
    id: number;
    titel: string;
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



