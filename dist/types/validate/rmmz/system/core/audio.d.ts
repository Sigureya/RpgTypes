export declare const SCHEMA_AUDIO_FILE_PARAMS_SYSTEM: {
    readonly type: "object";
    readonly properties: {
        readonly name: {
            readonly type: "string";
        };
        readonly volume: {
            readonly type: "integer";
        };
        readonly pitch: {
            readonly type: "integer";
        };
        readonly pan: {
            readonly type: "integer";
        };
    };
    readonly required: readonly ["name", "volume", "pitch", "pan"];
    readonly additionalProperties: false;
};
export declare const SCHEMA_SYSTEM_SOUND_ARRAY: {
    readonly type: "array";
    readonly maxItems: 24;
    readonly minItems: 24;
    readonly items: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
            };
            readonly volume: {
                readonly type: "integer";
            };
            readonly pitch: {
                readonly type: "integer";
            };
            readonly pan: {
                readonly type: "integer";
            };
        };
        readonly required: readonly ["name", "volume", "pitch", "pan"];
        readonly additionalProperties: false;
    };
};
