import { Rectangle } from "src/types/rectangle";
import { TextAlign } from "./types/TextAlign";
import { CommandItem } from "./types/commandItem";

export declare class Window_Command<ExtType = any> {
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

  initialize(rect: Rectangle): void;

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
