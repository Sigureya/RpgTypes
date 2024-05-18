import { Rectangle } from "./rectangle";
import { TextState } from "./types/textState";
import { TextAlign } from "./types/TextAlign";

export declare class Window_Base {
  destroy(options: void): void;

  lineHeight(): number;

  itemWidth(): number;

  itemHeight(): number;

  itemPadding(): number;

  baseTextrect(): Rectangle;

  loadWindowskin(): void;

  updatePadding(): void;

  updateBackOpacity(): void;

  fittingHeight(numLines: number): number;

  updateTone(): void;

  createContents(): void;

  destroyContents(): void;

  contentsWidth(): number;

  contentsHeight(): number;

  resetFontSettings(): void;

  resetTextColor(): void;

  update(): void;

  updateOpen(): void;

  updateClose(): void;

  open(): void;

  close(): void;

  isOpening(): boolean;

  isClosing(): boolean;

  show(): void;

  hide(): void;

  activate(): void;

  deactivate(): void;

  systemColor(): void;

  translucentOpacity(): void;

  changeTextColor(color: string): void;

  changeOutlineColor(color: string): void;

  changePaintOpacity(enabled: boolean): void;

  drawrect(x: number, y: number, width: number, height: number): void;

  drawText(
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    align: TextAlign
  ): void;

  textWidth(text: string): number;

  drawTextEx(text: string, x: number, y: number, width: number): void;

  textSizeEx(text: string): void;

  createTextState(text: string, x: number, y: number, width: number): void;

  processAllText(text: TextState): void;

  flushTextState(text: TextState): void;

  createTextBuffer(rtl: boolean): void;

  convertEscapeCharacters(text: string): void;

  actorName(actorId: number): string;

  partyMemberName(memberIndex: number): string;

  processCharacter(text: TextState): void;

  processControlCharacter(text: TextState, char: string): void;

  processNewLine(text: TextState): void;

  obtainEscapeCode(text: TextState): void;

  obtainEscapeParam(text: TextState): void;

  processEscapeCharacter(code: number, textState: TextState): void;

  processColorChange(colorIndex: number): void;

  processDrawIcon(iconIndex: number, textState: TextState): void;

  makeFontBigger(): void;

  makeFontSmaller(): void;

  calcTextHeight(text: TextState): void;

  maxFontSizeInLine(line: number): void;

  drawIcon(iconIndex: number, x: number, y: number): void;

  drawItemName(
    item: { name: string },
    x: number,
    y: number,
    width: number
  ): string;

  drawCurrencyValue(
    value: number,
    unit: string,
    x: number,
    y: number,
    width: number
  ): void;

  setBackgroundType(type: number): void;

  showBackgroundDimmer(): void;

  createDimmerSprite(): void;

  hideBackgroundDimmer(): void;

  updateBackgroundDimmer(): void;

  refreshDimmerBitmap(): void;

  playCursorSound(): void;

  playOkSound(): void;

  playBuzzerSound(): void;
}
