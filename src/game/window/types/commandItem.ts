export interface CommandItem<T> {
  name: string;
  symbol: string;
  enabled: boolean;
  ext: T;
}
// TODO: 引数の型に応じて構造を変化させる

interface IWindow_Command_NullExt {
  currentExt(): null;
  currentData(): CommandItem<null> | null;
  addCommand(name: string, symbol: string, enabled: boolean): void;
  addCommand(name: string, symbol: string): void;
}
interface IWindow_Command_AnyExt {
  currentExt(): null;
  currentData(): CommandItem<any> | null;
  addCommand(name: string, symbol: string, enabled: boolean, ext: any): void;
  addCommand(name: string, symbol: string): void;
}

interface IWindow_Command_HasExt<Ext> {
  currentExt(): Ext | null;
  currentData(): CommandItem<Ext> | null;
  addCommand(name: string, symbol: string, enabled: boolean, ext: Ext): void;
}

export interface IWindow_Command<ExtType> {
  currentExt(): ExtType | null;
  currentData(): CommandItem<ExtType> | null;
  findExt(ext: ExtType): number;
  addCommand(
    name: string,
    symbol: string,
    enabled: boolean,
    ext: ExtType | null
  ): void;
}

function hoge(iw: IWindow_Command_NullExt, nw: IWindow_Command_HasExt<{}>) {
  //  iw.addCommand()
}
