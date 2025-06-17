import { FormatItemMapper, FormatRule } from './core';
export declare const getDataKeysFromFormatRule: <T>(rule: FormatRule<T>) => Set<string & keyof T>;
export declare const getPlaceHolderKeys: <T>(rule: FormatRule<T>) => Set<string>;
export declare const getItemMappersFromRule: <T>(rule: FormatRule<T>) => ReadonlyArray<FormatItemMapper<T>>;
