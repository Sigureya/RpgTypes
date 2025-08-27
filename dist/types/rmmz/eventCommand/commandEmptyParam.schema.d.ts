declare const SCHEMA_COMMAND_EMPTY_PARAM: {
    readonly type: "object";
    readonly required: readonly ["code", "parameters", "indent"];
    readonly properties: {
        readonly indent: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly parameters: {
            readonly type: "array";
            readonly minItems: 0;
            readonly maxItems: 0;
        };
        readonly code: {
            readonly type: "integer";
            readonly enum: readonly [0, 109, 112, 113, 115, 204, 206, 213, 214, 216, 217, 221, 222, 243, 244, 251, 314, 315, 340, 351, 352, 353, 354, 411];
        };
    };
    readonly additionalProperties: false;
};
export default SCHEMA_COMMAND_EMPTY_PARAM;
