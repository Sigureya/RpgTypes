import { ParamBase } from '../../../../../../rmmz/plugin';
import { JSONSchemaType } from 'ajv';
export declare const X_RPG_PARM: "x-rpg-param";
export interface X_Param {
    [X_RPG_PARM]: X_RmmzParamBase;
}
export type JSONSchemaTypeWithRpgParam<X extends ParamBase & {
    default: unknown;
}> = JSONSchemaType<X["default"]> & {
    [X_RPG_PARM]: X_RmmzParam<ExtractParamData<X>>;
};
type ExtractParamData<T> = Omit<T, "default" | keyof ParamBase>;
export type X_ParamData<T extends ParamBase> = X_RmmzParam<ExtractParamData<T>, T extends {
    kind: infer K;
} ? K : string>;
export interface X_RmmzParamBase {
    kind: string;
    parent?: string | null;
    data: object;
}
export interface X_RmmzParam<T extends object, Kind extends string = string> extends X_RmmzParamBase {
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
