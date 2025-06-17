import { RmmzParamCore_Number, X_MetaParamCore_Number } from './types';
export declare const x_metaParamNumber: (num: RmmzParamCore_Number) => X_MetaParamCore_Number;
export declare const metaSchemaNumberRmmzParamCore: () => {
    type: "object";
    additionalProperties: false;
    properties: {
        digit: {
            type: "integer";
            minimum: number;
            nullable: true;
        };
    };
};
export declare const rmmzSchemaNumberParam: () => {
    type: "object";
    required: ("type" | "default")[];
    properties: {
        digit: {
            type: "integer";
            minimum: number;
            default: number;
            nullable: true;
        };
        min: {
            type: "number";
            default: number;
            nullable: true;
        };
        max: {
            type: "number";
            default: number;
            nullable: true;
        };
        default: {
            type: "number";
            default: number;
        };
        type: {
            type: "string";
            const: "number";
        };
    };
};
