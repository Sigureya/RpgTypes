import { RpgDataIdParam, SystemDataIdParam } from '../../../rmmz/plugin/schema/compile';
export declare const makeRpgIdField: (data: RpgDataIdParam | SystemDataIdParam) => {
    title?: string;
    description?: string;
    default?: number | undefined;
    type: "integer";
};
export declare const makeRpgIdFieldWithXParam: (data: RpgDataIdParam | SystemDataIdParam) => {
    "x-rpg-param": {
        data: import('../../../rmmz/plugin/schema/compile/kinds/core/rpgData/lookup').SourceId_RmmzUnknown | import('../../../rmmz/plugin/schema/compile/kinds/core/rpgData/lookup').SourceId_ValidRmmzData;
        parent?: string | undefined;
        kind: string;
    };
    title?: string;
    description?: string;
    default?: number | undefined;
    type: "integer";
};
