export declare const SCHEMA_SYSTEM_TITLE_COMMAND_WINDOW: {
    readonly additionalProperties: false;
    readonly type: "object";
    readonly required: readonly ["background", "offsetX", "offsetY"];
    readonly properties: {
        readonly background: {
            readonly type: "integer";
            readonly minimum: 0;
            readonly maximum: 1000;
        };
        readonly offsetX: {
            readonly type: "integer";
            readonly minimum: -1000;
            readonly maximum: 1000;
        };
        readonly offsetY: {
            readonly type: "integer";
            readonly minimum: -1000;
            readonly maximum: 1000;
        };
    };
};
