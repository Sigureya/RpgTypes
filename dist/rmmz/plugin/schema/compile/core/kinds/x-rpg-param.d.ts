import { KindBase, KindOfBoolean, KindOfNumber, KindOfNumberArray } from './kinds';
import { DataKind_RpgUnion, DataKind_SystemUnion } from './rpgData/rpgDataTypesNames';
export declare const X_RPG_PARM: "x-rpg-param";
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
interface KindOfAnyData<Kind extends DataKind_RpgUnion | DataKind_SystemUnion> extends KindBase {
    kind: Kind;
    text?: string;
    desc?: string;
    parent?: string;
}
export declare const xparamBaseData: <T extends object, P extends KindBase>(param: P, data: T) => {
    "x-rpg-param": {
        data: T;
        parent?: string | undefined;
        kind: string;
    };
};
export declare const xparamDataId: <Kind extends DataKind_RpgUnion | DataKind_SystemUnion>(dataId: KindOfAnyData<Kind>) => {
    "x-rpg-param": {
        data: import('./rpgData/lookup').SourceId_RmmzUnknown | import('./rpgData/lookup').SourceId_ValidRmmzData;
        parent?: string | undefined;
        kind: string;
    };
};
export declare const xparamNumber: (data: KindOfNumber | KindOfNumberArray) => {
    "x-rpg-param": {
        data: {
            digit: number;
        } | {
            digit?: undefined;
        };
        parent?: string | undefined;
        kind: string;
    };
};
export declare const xparamBoolean: (data: KindOfBoolean) => {
    "x-rpg-param": {
        data: {
            off?: string | undefined;
            on?: string | undefined;
        };
        parent?: string | undefined;
        kind: string;
    };
};
export {};
