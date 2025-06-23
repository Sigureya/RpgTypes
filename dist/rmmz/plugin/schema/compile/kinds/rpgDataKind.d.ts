import { KindOfRpgDataId, KindOfSystemDataId } from './core/primitiveParams';
export declare const makeRpgIdField: (data: KindOfRpgDataId | KindOfSystemDataId) => {
    description?: string | undefined;
    title?: string | undefined;
    default: number;
    type: "integer";
} | {
    description?: string | undefined;
    title?: string | undefined;
    default?: undefined;
    type: "integer";
};
export declare const makeRpgIdFieldWithXParam: (data: KindOfRpgDataId | KindOfSystemDataId) => {
    "x-rpg-param": {
        data: import('./core/rpgData/lookup').SourceId_RmmzUnknown | import('./core/rpgData/lookup').SourceId_ValidRmmzData;
        parent?: string | undefined;
        kind: string;
    };
    description?: string | undefined;
    title?: string | undefined;
    default: number;
    type: "integer";
} | {
    "x-rpg-param": {
        data: import('./core/rpgData/lookup').SourceId_RmmzUnknown | import('./core/rpgData/lookup').SourceId_ValidRmmzData;
        parent?: string | undefined;
        kind: string;
    };
    description?: string | undefined;
    title?: string | undefined;
    default?: undefined;
    type: "integer";
};
