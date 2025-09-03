export declare const SCHEMA_COMMAND_CALL_COMMON_EVENT: {
    readonly type: "object";
    readonly required: readonly ["code", "indent", "parameters"];
    readonly properties: {
        readonly code: {
            readonly type: "number";
            readonly const: 117;
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
                readonly type: "integer";
                readonly minimum: 0;
            }];
        };
    };
};
