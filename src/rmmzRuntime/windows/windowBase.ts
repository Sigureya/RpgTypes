export interface Rmmz_Window_Base {
  lineHeight(): number;
  get contents(): Rmmz_Contents;
}

export interface Rmmz_Contents {
  fontSize: number;
}
