declare const SCHEMA_COMMAND_INPUT_NUMBER: {
    readonly type: "object";
    readonly properties: {
        readonly code: {
            readonly type: "number";
            readonly const: 103;
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
                readonly type: "number";
            }];
        };
    };
    readonly required: readonly ["code", "indent", "parameters"];
};
export default SCHEMA_COMMAND_INPUT_NUMBER;
