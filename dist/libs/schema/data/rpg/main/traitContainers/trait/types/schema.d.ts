export declare const TYPENAME_TRAIT: "Trait";
export declare const SCHEMA_TRAIT: {
    readonly type: "object";
    readonly required: readonly ["code", "dataId", "value"];
    readonly properties: {
        readonly code: {
            readonly type: "integer";
        };
        readonly dataId: {
            readonly type: "integer";
        };
        readonly value: {
            readonly type: "integer";
        };
    };
};
