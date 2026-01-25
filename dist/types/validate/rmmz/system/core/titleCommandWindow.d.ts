export declare const SCHEMA_SYSTEM_TITLE_COMMAND_WINDOW: {
    readonly type: "object";
    readonly additionalProperties: false;
    readonly required: readonly ["background", "offsetX", "offsetY"];
    readonly properties: {
        readonly background: {
            readonly type: "integer";
        };
        readonly offsetX: {
            readonly type: "integer";
        };
        readonly offsetY: {
            readonly type: "integer";
        };
    };
};
