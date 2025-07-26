declare const SCHEMA_SYSTEM_OTHER_TERMS: {
    readonly type: "object";
    readonly properties: {
        readonly gameTitle: {
            readonly type: "string";
        };
        readonly currencyUnit: {
            readonly type: "string";
        };
    };
    readonly required: readonly ["gameTitle", "currencyUnit"];
    readonly additionalProperties: false;
};
export default SCHEMA_SYSTEM_OTHER_TERMS;
