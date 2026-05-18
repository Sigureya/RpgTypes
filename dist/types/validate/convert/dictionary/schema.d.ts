export declare const SCHEMA_RUNTIME_DICTIONARY_DATA: {
    type: "object";
    required: ("targetNoteKeys" | "textDictionary" | "actorTexts")[];
    properties: {
        targetNoteKeys: {
            type: "array";
            items: {
                type: "string";
            };
        };
        textDictionary: {
            type: "array";
            items: {
                readonly type: "object";
                readonly required: readonly ["key", "value"];
                readonly properties: {
                    readonly key: {
                        readonly type: "string";
                    };
                    readonly value: {
                        readonly type: "string";
                    };
                };
                readonly additionalProperties: false;
            };
        };
        actorTexts: {
            type: "array";
            items: {
                readonly type: "object";
                readonly required: readonly ["key", "value"];
                readonly properties: {
                    readonly key: {
                        readonly type: "string";
                    };
                    readonly value: {
                        readonly type: "string";
                    };
                };
                readonly additionalProperties: false;
            };
        };
    };
};
