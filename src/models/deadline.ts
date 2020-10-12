export interface Dead {
  UdkommerIkke: boolean;
  UdgivelsesDato: number;
  OrdreDeadline: number;
  OrdreTid: string;
  MaterialeDeadline: number;
  MaterialeTid: string;
  Uge: string;
  BladID: number;
  Linje: number;
}

export interface Deadline{
  dead: Dead;
}
