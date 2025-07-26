declare const SCHEMA_COMMAND_SHOW_MESSAGE: {
    readonly type: "object";
    readonly required: readonly ["code", "parameters", "indent"];
    readonly properties: {
        readonly code: {
            readonly type: "integer";
            readonly const: 101;
        };
        readonly indent: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly parameters: {
            readonly type: "array";
            readonly items: readonly [{
                readonly type: "string";
            }, {
                readonly type: "integer";
                readonly minimum: 0;
                readonly maximum: 7;
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
    };
};
export default SCHEMA_COMMAND_SHOW_MESSAGE;
