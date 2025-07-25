declare const SCHEMA_COMMAND_SCROLL_TEXT_HEAD: {
    readonly type: "object";
    readonly properties: {
        readonly code: {
            readonly type: "number";
            readonly const: 105;
        };
        readonly indent: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly parameters: {
            readonly type: "array";
            readonly minItems: 2;
            readonly maxItems: 2;
            readonly items: readonly [{
                readonly type: "number";
            }, {
                readonly type: "boolean";
            }];
        };
    };
    readonly required: readonly ["code", "indent", "parameters"];
};
export default SCHEMA_COMMAND_SCROLL_TEXT_HEAD;
