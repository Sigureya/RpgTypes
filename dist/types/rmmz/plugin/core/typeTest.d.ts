import { PrimitiveParam, ParamKinds, PrimitiveStringParam, ScalaParam, ArrayParamTypes } from './paramUnion';
import { ArrayParam, StructRefParam, StructArrayRefParam } from './primitiveParams';
export declare const isArrayParam: <T extends PrimitiveParam>(param: T) => param is Extract<T, ArrayParam>;
export declare const isArrayParamEx: <T extends PrimitiveParam, K extends ParamKinds>(param: T, kind: K) => param is Extract<T, ArrayParam & {
    kind: `${K}[]`;
}>;
export declare const isScalarParam: <T extends PrimitiveParam>(param: T) => param is Extract<T, ScalaParam>;
export declare const isStructParam: (param: PrimitiveParam) => param is StructRefParam;
export declare const isStructArrayParam: (param: PrimitiveParam) => param is StructArrayRefParam;
export declare const paramHasText: (param: PrimitiveParam) => param is PrimitiveStringParam;
export declare const isStringValueParam: (param: ScalaParam) => param is Extract<PrimitiveParam, {
    default: string;
}>;
export declare const isNumberValueParam: (param: PrimitiveParam) => param is Extract<PrimitiveParam, {
    default: number;
}>;
export declare const isNumberValueParamEx: (param: ScalaParam) => param is Extract<PrimitiveParam, {
    default: number;
}>;
export declare const isNumberArrayParam: (param: ArrayParam) => param is Extract<ArrayParam, {
    default: number[];
}>;
export declare const isStringArrayParam: (param: ArrayParam) => param is Extract<ArrayParamTypes, {
    default: string[];
}>;
