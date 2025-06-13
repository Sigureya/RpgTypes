export declare const SCHEMA_COMMAND_CONTROL_SWITCHES: {
    readonly type: "object";
    readonly required: readonly ["code", "parameters", "indent"];
    readonly properties: {
        readonly code: {
            readonly type: "integer";
            readonly const: 121;
        };
        readonly indent: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly parameters: {
            readonly type: "array";
            readonly items: readonly [{
                readonly type: "integer";
                readonly minimum: 1;
            }, {
                readonly type: "integer";
                readonly minimum: 1;
            }, {
                readonly type: "integer";
                readonly enum: readonly [0, 1];
            }];
            readonly minItems: 3;
            readonly maxItems: 3;
        };
    };
};
