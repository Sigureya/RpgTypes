import type { Window_Command } from "./Window_Command";

//-----------------------------------------------------------------------------
// Window_Options
//
// The window for changing various settings on the options screen.
export declare class Window_Options extends Window_Command {
  makeCommandList(): void;

  addGeneralOptions(): void;

  addVolumeOptions(): void;

  drawItem(index: number): void;

  statusWidth(): number;

  statusText(index: number): void;

  isVolumeSymbol(symbol: symbol): boolean;

  booleanStatusText(value: boolean): void;

  volumeStatusText(value: number): string;

  processOk(): void;

  cursorRight(): void;

  cursorLeft(): void;

  changeVolume(symbol: string, forward: number, wrap: boolean): void;

  volumeOffset(): void;

  changeValue(symbol: string, value: number): void;

  getConfigValue(symbol: string): void;

  setConfigValue(symbol: string, volume: number): void;
}
