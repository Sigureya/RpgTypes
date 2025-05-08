export declare const SHOW_MESSAGE: 101;
export declare const SCHEMA_COMMAND_SHOW_MESSAGE: {
    readonly type: "object";
    readonly required: readonly ["code", "parameters", "indent"];
    readonly properties: {
        readonly code: {
            readonly type: "integer";
            readonly enum: readonly [101];
        };
        readonly parameters: {
            readonly type: "array";
            readonly items: readonly [{
                readonly type: "string";
            }, {
                readonly type: "integer";
                readonly minimum: 0;
            }, {
                readonly type: "integer";
                readonly minimum: 0;
                readonly maximum: 2;
            }, {
                readonly type: "integer";
                readonly minimum: 0;
                readonly maximum: 2;
            }, {
                readonly type: "string";
            }];
            readonly minItems: 5;
            readonly maxItems: 5;
        };
        readonly indent: {
            readonly type: "integer";
            readonly minimum: 0;
            readonly maximum: 2;
        };
    };
};
