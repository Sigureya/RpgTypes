export declare const SCHEMA_SYSTEM_BOOLEAN_GAMEMENU_OPTIONS: {
    readonly required: readonly ["itemCategories", "menuCommands"];
    readonly additionalProperties: false;
    readonly type: "object";
    readonly properties: {
        readonly itemCategories: {
            readonly type: "array";
            readonly maxItems: 4;
            readonly minItems: 4;
            readonly items: {
                readonly type: "boolean";
            };
        };
        readonly menuCommands: {
            readonly type: "array";
            readonly maxItems: 6;
            readonly minItems: 6;
            readonly items: {
                readonly type: "boolean";
            };
        };
    };
};
