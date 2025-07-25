declare const SCHEMA_MAP_EVENT_IMAGE: {
    readonly type: "object";
    readonly required: readonly ["characterIndex", "characterName", "direction", "pattern", "tileId"];
    readonly properties: {
        readonly characterIndex: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly characterName: {
            readonly type: "string";
        };
        readonly direction: {
            readonly type: "integer";
            readonly enum: readonly [2, 4, 6, 8];
        };
        readonly pattern: {
            readonly type: "integer";
        };
        readonly tileId: {
            readonly type: "integer";
        };
    };
};
export default SCHEMA_MAP_EVENT_IMAGE;
