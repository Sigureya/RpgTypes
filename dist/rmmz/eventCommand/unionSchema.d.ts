export declare const SCHEMA_COMMAND_TEXT_BODY: {
    readonly type: "object";
    readonly required: readonly ["code", "parameters", "indent"];
    readonly properties: {
        readonly code: {
            readonly type: "integer";
            readonly enum: (401 | 405 | 108 | 408 | 355 | 655)[];
        };
        readonly indent: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly parameters: {
            readonly type: "array";
            readonly minItems: 1;
            readonly maxItems: 1;
            readonly items: readonly [{
                readonly type: "string";
            }];
        };
    };
    readonly additionalProperties: false;
};
export declare const SCHEMA_COMMAND_EMPTY_PARAM: {
    readonly type: "object";
    readonly required: readonly ["code", "parameters", "indent"];
    readonly properties: {
        readonly indent: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly parameters: {
            readonly type: "array";
            readonly minItems: 0;
            readonly maxItems: 0;
        };
        readonly code: {
            readonly type: "integer";
            readonly enum: (0 | 109 | 411 | 112 | 113 | 115 | 251 | 243 | 244 | 314 | 340 | 351 | 315 | 204 | 206 | 213 | 214 | 216 | 217 | 221 | 222 | 352 | 353 | 354)[];
        };
    };
    readonly additionalProperties: false;
};
