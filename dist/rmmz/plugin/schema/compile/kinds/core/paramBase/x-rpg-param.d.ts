import { JSONSchemaType } from 'ajv';
import { ParamBase } from './paramBase';
export declare const X_RPG_PARM: "x-rpg-param";
export interface X_Param {
    [X_RPG_PARM]: X_RmmzParamBaee;
}
export type JSONSchemaTypeWithRpgParam<V, X = object> = JSONSchemaType<V> & {
    [X_RPG_PARM]: X_RmmzParamInput<X>;
};
export type ExtractXParam<T extends ParamBase> = Omit<T, "default" | keyof ParamBase>;
export interface X_RmmzParamBaee {
    parent?: string | null;
    kind: string;
    data: object;
}
export interface X_RmmzParamInput<T, Kind extends string = string> {
    parent?: string | null;
    kind: Kind;
    data: T;
}
export declare const xparamBaseData: <T extends ParamBase, D extends ExtractXParam<T>>(param: T, data: D) => {
    "x-rpg-param": {
        data: D;
        parent?: string | undefined;
        kind: string;
    };
};
