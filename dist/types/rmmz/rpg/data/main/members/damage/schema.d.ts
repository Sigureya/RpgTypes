declare const SCHEMA_DAMAGE: {
    readonly type: "object";
    readonly required: readonly ["type", "elementId", "formula", "variance", "critical"];
    readonly properties: {
        readonly type: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly elementId: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly formula: {
            readonly type: "string";
        };
        readonly variance: {
            readonly type: "integer";
        };
        readonly critical: {
            readonly type: "boolean";
        };
    };
};
export default SCHEMA_DAMAGE;
