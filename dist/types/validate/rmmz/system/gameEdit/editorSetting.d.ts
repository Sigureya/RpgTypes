export declare const SCHEMA_SYSTEM_EDITOR_SETTINGS: {
    readonly additionalProperties: false;
    readonly type: "object";
    readonly required: readonly ["messageWidth1", "messageWidth2", "jsonFormatLevel"];
    readonly properties: {
        readonly messageWidth1: {
            readonly type: "integer";
            readonly minimum: 0;
            readonly maximum: 1000;
        };
        readonly messageWidth2: {
            readonly type: "integer";
            readonly minimum: 0;
            readonly maximum: 1000;
        };
        readonly jsonFormatLevel: {
            readonly type: "integer";
            readonly minimum: 0;
            readonly maximum: 4;
        };
    };
};
