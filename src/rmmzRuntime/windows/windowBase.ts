import type { Rmmz_TextState } from "./textState";
export interface Rmmz_Window_Base_ContrlolChar {
  drawIcon(iconIndex: number, x: number, y: number): void;
  makeFontBigger(): void;
  makeFontSmaller(): void;
}

export interface Rmmz_Window_Base extends Rmmz_Window_Base_ContrlolChar {
  lineHeight(): number;
  get contents(): Rmmz_Contents;
  convertEscapeCharacters(text: string): string;
  actorName(n: number): string;
  partyMemberName(n: number): string;
  processNewLine(textState: Rmmz_TextState): void;
  obtainEscapeCode(textState: Rmmz_TextState): string;
  obtainEscapeParam(textState: Rmmz_TextState): number | "";
  processEscapeCharacter(code: string, textState: Rmmz_TextState): void;
  flushTextState(textState: Rmmz_TextState): void;
  textWidth(text: string): number;
}

export interface Rmmz_Contents {
  fontSize: number;
}

export interface Rmmz_Bitmap {
  measureTextWidth(text: string): number;
  drawText(
    text: string,
    x: number,
    y: number,
    width: number,
    height: number,
  ): void;
}
