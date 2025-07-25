declare const SCHEMA_SYSTEM_OTHER_DATA: {
    readonly type: "object";
    readonly additionalProperties: false;
    readonly required: readonly ["locale", "versionId", "windowTone"];
    readonly properties: {
        readonly locale: {
            readonly type: "string";
        };
        readonly versionId: {
            readonly type: "number";
        };
        readonly windowTone: {
            readonly type: "array";
            readonly items: {
                readonly type: "number";
            };
            readonly minItems: 4;
            readonly maxItems: 4;
        };
    };
};
export default SCHEMA_SYSTEM_OTHER_DATA;
