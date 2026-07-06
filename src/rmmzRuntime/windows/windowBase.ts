export interface Rmmz_Window_Base {
  lineHeight(): number;
  get contents(): Rmmz_Contents;
  convertEscapeCharacters(text: string): string;
  actorName(n: number): string;
  partyMemberName(n: number): string;
}

export interface Rmmz_Contents {
  fontSize: number;
}
