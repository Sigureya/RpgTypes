import { Data_NamedItem } from './types';
export declare const findItemById: <T extends Data_NamedItem>(dataId: number, list: ReadonlyArray<T>) => T | undefined;
export declare const getItemName: (list: ReadonlyArray<Data_NamedItem>, dataId: number) => string;
