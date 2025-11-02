import { ParamKinds } from './core';
export interface ParamFilter<K extends ParamKinds> {
    kinds: K[];
    single: Set<K>;
    array: Set<`${K}[]`>;
}
export declare const createParamFilter: <K extends ParamKinds>(kinds: ReadonlyArray<K>) => ParamFilter<K>;
