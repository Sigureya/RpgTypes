import { ArrayParam, ParamKinds, PrimitiveParam } from './core/primitiveParams';
export declare const isArrayParam: <T extends PrimitiveParam>(param: T) => param is Extract<T, ArrayParam>;
export declare const isArrayParamEx: <T extends PrimitiveParam, K extends ParamKinds>(param: T, kind: K) => param is Extract<T, ArrayParam & {
    kind: `${K}[]`;
}>;
