export declare const SCHEMA_DATA_MAP_INFO: {
    readonly type: "object";
    readonly required: readonly ["name", "id", "expanded", "order", "parentId", "scrollX", "scrollY"];
    readonly properties: {
        readonly name: {
            readonly type: "string";
        };
        readonly id: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly expanded: {
            readonly type: "boolean";
        };
        readonly order: {
            readonly type: "integer";
        };
        readonly parentId: {
            readonly type: "integer";
        };
        readonly scrollX: {
            readonly type: "number";
        };
        readonly scrollY: {
            readonly type: "number";
        };
    };
};
