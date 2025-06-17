import { RmmzParamCore_Boolean, X_MetaParamCore_Boolean } from './types';
export declare const metaSchemaBooleanRmmzParamCore: () => {
    type: "object";
    additionalProperties: false;
    properties: {
        on: {
            type: "string";
            nullable: true;
        };
        off: {
            type: "string";
            nullable: true;
        };
    };
};
export declare const booleanMetaParam: (bool: RmmzParamCore_Boolean) => Partial<X_MetaParamCore_Boolean>;
export declare const makeSchemaBooleanParam: () => {
    additionalProperties: false;
    type: "object";
    required: ("type" | "default")[];
    properties: {
        type: {
            type: "string";
            const: "boolean";
        };
        default: {
            type: "boolean";
        };
        on: {
            type: "string";
            nullable: true;
        };
        off: {
            type: "string";
            nullable: true;
        };
    };
};
