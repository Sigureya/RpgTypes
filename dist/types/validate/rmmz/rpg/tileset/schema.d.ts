export declare const SCHEMA_DATA_TILESET: {
    readonly type: "object";
    readonly required: readonly ["name", "id", "note", "flags", "mode", "tilesetNames"];
    readonly properties: {
        readonly name: {
            readonly type: "string";
        };
        readonly id: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly note: {
            readonly type: "string";
        };
        readonly flags: {
            readonly type: "array";
            readonly items: {
                readonly type: "integer";
                readonly minimum: 0;
            };
        };
        readonly mode: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly tilesetNames: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
    };
};
