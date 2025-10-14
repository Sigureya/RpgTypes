import { ParamKinds, PrimitiveParam, PrimitiveStringParam } from './core';
import { ArrayParam, StructArrayRefParam, StructRefParam } from './core/primitiveParams';
export declare const isArrayParam: <T extends PrimitiveParam>(param: T) => param is Extract<T, ArrayParam>;
export declare const isArrayParamEx: <T extends PrimitiveParam, K extends ParamKinds>(param: T, kind: K) => param is Extract<T, ArrayParam & {
    kind: `${K}[]`;
}>;
export declare const isStructParam: (param: PrimitiveParam) => param is StructRefParam;
export declare const isStructArrayParam: (param: PrimitiveParam) => param is StructArrayRefParam;
export declare const paramHasText: (param: PrimitiveParam) => param is PrimitiveStringParam;
