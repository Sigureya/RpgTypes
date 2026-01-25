export declare const SCHEMA_COMMAND_SHOW_MESSAGE: {
    readonly type: "object";
    readonly required: readonly ["code", "indent", "parameters"];
    readonly properties: {
        readonly code: {
            readonly type: "number";
            readonly const: 101;
        };
        readonly indent: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly parameters: {
            readonly type: "array";
            readonly minItems: 5;
            readonly maxItems: 5;
            readonly items: readonly [{
                readonly type: "string";
            }, {
                readonly type: "integer";
                readonly minimum: 0;
            }, {
                readonly type: "integer";
                readonly minimum: 0;
            }, {
                readonly type: "integer";
                readonly minimum: 0;
            }, {
                readonly type: "string";
                readonly nullable: true;
            }];
        };
    };
};
