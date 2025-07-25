declare const SCHEMA_COMMAND_CHANGE_ACTOR_TEXT: {
    readonly type: "object";
    readonly required: readonly ["code", "parameters", "indent"];
    readonly properties: {
        readonly code: {
            readonly type: "integer";
            readonly enum: readonly [320, 324, 325];
        };
        readonly indent: {
            readonly type: "integer";
        };
        readonly parameters: {
            readonly type: "array";
            readonly minItems: 2;
            readonly maxItems: 2;
            readonly items: readonly [{
                readonly type: "integer";
                readonly minimum: 0;
            }, {
                readonly type: "string";
            }];
        };
    };
    readonly additionalProperties: false;
};
export default SCHEMA_COMMAND_CHANGE_ACTOR_TEXT;
