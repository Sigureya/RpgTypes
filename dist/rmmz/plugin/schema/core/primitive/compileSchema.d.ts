import { NewRmmzParam_Boolean, NewRmmzParam_DataId, NewRmmzParam_Number } from './newParamType';
import { RmmzParamCore_Select } from './select';
export declare const compileSchemaFromBooleanParam: (bool: NewRmmzParam_Boolean) => {
    type: "boolean";
    default: boolean;
    title: string;
    description: string;
    "x-rpg-param": {
        parent: string;
        kind: string;
        data: {
            on: string;
            off: string;
        };
    };
};
export declare const compileSchemaFromDataId: (dataId: NewRmmzParam_DataId) => {
    type: "number";
    default: number;
    title: string;
    description: string;
    "x-rpg-param": {
        parent: string;
        kind: string;
        data: import('./rpgDataId/lookup').SourceId_RmmzUnknown | import('./rpgDataId/lookup').SourceId_ValidRmmzData;
    };
};
export declare const compileSchemaFromNumberParam: (num: NewRmmzParam_Number) => {
    title: string;
    description: string;
    default: number;
    type: "number" | "integer";
    maximum: number;
    minimum: number;
    "x-rpg-param": {
        parent: string;
        kind: string;
        data: {
            digit: number;
        };
    };
};
export declare const schemaFromStringSelectParam: (select: RmmzParamCore_Select) => {
    type: "string";
    default: string;
    title: string;
    description: string;
    "x-rpg-param": {
        parent: string;
        kind: string;
        data: {
            options: {
                value: string;
                option: string;
            }[];
        };
    };
};
