declare const SCHEMA_COMMAND_SCROLL_TEXT_BODY: {
    readonly type: "object";
    readonly properties: {
        readonly code: {
            readonly type: "number";
            readonly const: 405;
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
    readonly required: readonly ["code", "indent", "parameters"];
};
export default SCHEMA_COMMAND_SCROLL_TEXT_BODY;
