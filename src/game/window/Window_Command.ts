import { Rectangle } from "src/types/rectangle";
import { TextAlign } from "./types/TextAlign";
import { IWindow_Command } from "./types/commandItem";

export declare class Window_Command<T = any> implements IWindow_Command<T> {
  currentExt(): T | null;
  findExt(ext: T): number;
  addCommand(
    name: string,
    symbol: string,
    enabled: boolean,
    ext: T | null
  ): void;
  addCommand(name: string, symbol: string): void;
  initialize(rect: Rectangle): void;

  maxItems(): number;

  clearCommandList(): boolean;

  makeCommandList(): void;

  commandName(index: number): string;

  commandSymbol(index: number): string;

  isCommandEnabled(index: number): boolean;

  currentData(): any;

  isCurrentItemEnabled(): boolean;

  currentSymbol(): string;

  findSymbol(symbol: string): any;

  selectSymbol(symbol: string): any;

  drawItem(index: number): void;

  itemTextAlign(): TextAlign;

  isOkEnabled(): boolean;

  callOkHandler(): any;

  refresh(): void;
}
