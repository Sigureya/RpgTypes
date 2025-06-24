import { JSONSchemaType } from 'ajv';
import { ParamBase } from './paramBase';
export declare const X_RPG_PARM: "x-rpg-param";
export interface X_Param {
    [X_RPG_PARM]: X_RmmzParamBase;
}
export type JSONSchemaTypeWithRpgParam<V, X = object> = JSONSchemaType<V> & {
    [X_RPG_PARM]: X_RmmzParam<X>;
};
type ExtractParamData<T extends ParamBase> = Omit<T, "default" | keyof ParamBase>;
export type X_ParamData<T extends ParamBase> = X_RmmzParam<ExtractParamData<T>, T extends {
    kind: infer K;
} ? K : string>;
export interface X_RmmzParamBase {
    kind: string;
    parent?: string | null;
    data: object;
}
export interface X_RmmzParam<T, Kind extends string = string> {
    kind: Kind;
    parent?: string | null;
    data: T;
}
export declare const xparamBaseData: <T extends ParamBase, D extends ExtractParamData<T>>(param: T, data: D) => {
    "x-rpg-param": {
        data: D;
        parent?: string | undefined;
        kind: string;
    };
};
export {};
