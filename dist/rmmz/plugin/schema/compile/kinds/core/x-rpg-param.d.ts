import { JSONSchemaType } from 'ajv';
import { KindBase } from './primitiveParams';
export declare const X_RPG_PARM: "x-rpg-param";
export interface X_Param {
    [X_RPG_PARM]: X_RmmzParamBaee;
}
export type JSONSchemaTypeWithRpgParam<V, X = object> = JSONSchemaType<V> & {
    [X_RPG_PARM]: X_RmmzParamInput<X>;
};
type ExtractXParam<T extends KindBase> = Omit<T, "default" | keyof KindBase>;
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
export declare const xparamBaseData: <T extends KindBase, D extends ExtractXParam<T>>(param: T, data: D) => {
    "x-rpg-param": {
        data: D;
        parent?: string | undefined;
        kind: string;
    };
};
export {};
