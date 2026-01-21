export declare const SCHEMA_DATA_MAPINFO: {
    readonly type: "object";
    readonly required: readonly ["name", "id", "order", "expanded", "scrollX", "scrollY", "parentId"];
    readonly properties: {
        readonly id: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly name: {
            readonly type: "string";
        };
        readonly displayName: {
            readonly type: "string";
        };
        readonly order: {
            readonly type: "integer";
        };
        readonly expanded: {
            readonly type: "boolean";
        };
        readonly scrollX: {
            readonly type: "number";
        };
        readonly scrollY: {
            readonly type: "number";
        };
        readonly parentId: {
            readonly type: "integer";
            readonly minimum: 0;
        };
    };
};
