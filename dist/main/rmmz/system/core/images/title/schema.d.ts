declare const SCHEMA_SYSTEM_TITLE_IMAGES: {
    readonly additionalProperties: false;
    readonly type: "object";
    readonly required: readonly ["title1Name", "title2Name"];
    readonly properties: {
        readonly title1Name: {
            readonly type: "string";
        };
        readonly title2Name: {
            readonly type: "string";
        };
    };
};
export default SCHEMA_SYSTEM_TITLE_IMAGES;
