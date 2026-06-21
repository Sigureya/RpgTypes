export declare const SCHEMA_COMMAND_SHOW_CHOICES: {
    readonly type: "object";
    readonly required: readonly ["code", "indent", "parameters"];
    readonly properties: {
        readonly code: {
            readonly type: "number";
            readonly const: 102;
        };
        readonly indent: {
            readonly type: "integer";
        };
        readonly parameters: {
            readonly type: "array";
            readonly minItems: 5;
            readonly maxItems: 5;
            readonly items: readonly [{
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
            }, {
                readonly type: "integer";
            }, {
                readonly type: "integer";
            }, {
                readonly type: "integer";
            }, {
                readonly type: "integer";
            }];
        };
    };
    readonly additionalProperties: false;
};
