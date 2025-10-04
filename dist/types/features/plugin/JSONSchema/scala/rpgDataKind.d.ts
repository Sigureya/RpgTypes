import { RpgDataIdParam, SystemDataIdParam } from '../../../../rmmz/plugin';
export declare const makeRpgIdField: (data: RpgDataIdParam | SystemDataIdParam) => {
    title?: string;
    description?: string;
    default?: number | undefined;
    type: "integer";
};
export declare const makeRpgIdFieldWithXParam: (data: RpgDataIdParam | SystemDataIdParam) => {
    "x-rpg-param": {
        data: import('../../../../rmmz/plugin/core/rpgData/lookup').SourceId_RmmzUnknown | import('../../../../rmmz/plugin/core/rpgData/lookup').SourceId_ValidRmmzData;
        parent?: string | undefined;
        kind: string;
    };
    title?: string;
    description?: string;
    default?: number | undefined;
    type: "integer";
};
