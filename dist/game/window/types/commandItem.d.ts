export interface CommandItem<T> {
    name: string;
    symbol: string;
    enabled: boolean;
    ext: T;
}
export declare class IWindow_Command<ExtType> {
    currentExt(): ExtType | null;
    currentData(): CommandItem<ExtType> | null;
    findExt(ext: ExtType): number;
    addCommand(name: string, symbol: string, enabled: boolean, ext: ExtType | null): void;
    addCommand(name: string, symbol: string, enabled: boolean): void;
    addCommand(name: string, symbol: string): void;
}
