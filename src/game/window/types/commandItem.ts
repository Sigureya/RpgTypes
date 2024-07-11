export interface CommandItem<T> {
  name: string;
  symbol: string;
  enabled: boolean;
  ext: T;
}
// TODO: 引数の型に応じて構造を変化させる

declare class Virtual_Window_Command_NullExt {
  currentExt(): null;
  currentData(): CommandItem<null> | null;
  addCommand(name: string, symbol: string, enabled: boolean): void;
  addCommand(name: string, symbol: string): void;
}
declare class Virtual_Window_Command_AnyExt {
  currentExt(): any;
  currentData(): CommandItem<any> | null;
  addCommand(name: string, symbol: string, enabled: boolean, ext: any): void;
  addCommand(name: string, symbol: string, enabled: boolean): void;
  addCommand(name: string, symbol: string): void;
}

declare class Virtual_Window_Command_HasExt<Ext> {
  currentExt(): Ext | null;
  currentData(): CommandItem<Ext> | null;
  addCommand(name: string, symbol: string, enabled: boolean, ext: Ext): void;
}

export declare class IWindow_Command<ExtType> {
  currentExt(): ExtType | null;
  currentData(): CommandItem<ExtType> | null;
  findExt(ext: ExtType): number;
  addCommand(
    name: string,
    symbol: string,
    enabled: boolean,
    ext: ExtType | null
  ): void;
  addCommand(name: string, symbol: string, enabled: boolean): void;
  addCommand(name: string, symbol: string): void;
}
