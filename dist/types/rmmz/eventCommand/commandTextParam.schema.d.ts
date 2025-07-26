declare const SCHEMA_COMMAND_TEXT_BODY: {
    readonly type: "object";
    readonly required: readonly ["code", "parameters", "indent"];
    readonly properties: {
        readonly code: {
            readonly type: "integer";
            readonly enum: (401 | 405 | 108 | 408 | 355 | 655)[];
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
    readonly additionalProperties: false;
};
export default SCHEMA_COMMAND_TEXT_BODY;
