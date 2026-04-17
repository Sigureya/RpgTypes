import { ArrayDataErrorMessages, ReadArrayResult } from './types';
export declare const readArrayData: <T, F extends string>(terms: ArrayDataErrorMessages, filename: F, readFileFn: (filename: F) => Promise<string>, validateItemFn: (item: unknown) => item is T) => Promise<ReadArrayResult<T>>;
