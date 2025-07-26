declare const SCHEMA_SYSTEM_PARAM_NAMS_ARRAY: {
    readonly type: "array";
    readonly items: {
        readonly type: "string";
        readonly minLength: 1;
    };
    readonly minItems: 10;
    readonly maxItems: 10;
    readonly uniqueItems: true;
};
export default SCHEMA_SYSTEM_PARAM_NAMS_ARRAY;
