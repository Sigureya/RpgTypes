import { StructParamPrimitive } from './primitiveParams';
export declare const reduceParams: <K extends string, P extends StructParamPrimitive, R>(params: Record<K, P>, fn: (value: P, key: string) => R) => Record<K, R>;
export declare const paramsToObject: <T extends Record<string, StructParamPrimitive & {
    default: unknown;
}>>(data: T) => ParamToObject<T>;
export type ParamToObject<T extends Record<string, {
    default: unknown;
}>> = {
    [K in keyof T]: T[K] extends {
        default: infer D;
    } ? D : never;
};
