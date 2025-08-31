declare const SCHEMA_COMMAND_UNKNOWN: {
    readonly type: "object";
    readonly additionalProperties: false;
    readonly required: ("code" | "indent" | "parameters")[];
    readonly properties: {
        readonly code: {
            readonly type: "integer";
        };
        readonly indent: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly parameters: {
            readonly type: "array";
        };
    };
};
export default SCHEMA_COMMAND_UNKNOWN;
