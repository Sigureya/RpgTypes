export declare const SCHEMA_SYSTEM_IMAGE_SIZE: {
    readonly additionalProperties: false;
    readonly type: "object";
    readonly required: readonly ["tileSize", "faceSize", "iconSize"];
    readonly properties: {
        readonly tileSize: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly faceSize: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly iconSize: {
            readonly type: "integer";
            readonly minimum: 0;
        };
    };
};
export declare const SCHEMA_SYSTEM_TITLE_IMAGES: {
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
