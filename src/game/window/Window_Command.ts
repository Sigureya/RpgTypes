import type { CommandItem, TextAlign } from "./types/";
import type { Window_Selectable } from "./Window_Selectable";

export declare class Window_Command<ExtType = any> extends Window_Selectable {
  currentData(): CommandItem<ExtType> | null;
  currentExt(): ExtType | null;
  findExt(ext: ExtType): number;
  addCommand(
    name: string,
    symbol: string,
    enabled: boolean,
    ext: ExtType | null
  ): void;
  addCommand(name: string, symbol: string): void;
  addCommand(name: string, symbol: string, enabled: boolean): void;

  maxItems(): number;

  clearCommandList(): boolean;

  makeCommandList(): void;

  commandName(index: number): string;

  commandSymbol(index: number): string;

  isCommandEnabled(index: number): boolean;

  isCurrentItemEnabled(): boolean;

  currentSymbol(): string;

  findSymbol(symbol: string): number;

  selectSymbol(symbol: string): void;

  drawItem(index: number): void;

  itemTextAlign(): TextAlign;

  isOkEnabled(): boolean;

  callOkHandler(): void;

  refresh(): void;
}
