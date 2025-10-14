import { ParamKinds, ScalaParam } from './core';
export interface ParamFilter<K extends ParamKinds> {
    kinds: K[];
    single: Set<K>;
    array: Set<`${K}[]`>;
}
export declare const createParamFilter: <K extends ParamKinds>(kinds: ReadonlyArray<K>) => ParamFilter<K>;
export declare const ppp: <K extends ParamKinds>(param: ScalaParam, filter: ParamFilter<K>) => param is Extract<ScalaParam, {
    kind: K;
}>;
