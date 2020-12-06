

  export interface KontaktTyper {
    id: number;
    Titel: string;
  }

  export interface KontaktTitler {
    id: number;
    Titel: string;
  }

  export interface StamBladUdsending{
    name?: any;
    email?: any;
    kontaktType: string;
    telefonnummer?: any;
    bladId: number;
    id: number;
    titel?: any;
    kontaktTyper: KontaktTyper[];
    kontaktTitlers: KontaktTitler[];
  }



