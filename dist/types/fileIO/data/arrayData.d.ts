import { TermsOfReadArrayData, ReadArrayResult } from './types';
export declare const readArrayData: <T>(terms: TermsOfReadArrayData, filename: string, readFileFn: (filename: string) => Promise<string>, validateItemFn: (item: unknown) => item is T) => Promise<ReadArrayResult<T>>;
