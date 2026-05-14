export declare const SCHEMA_COMMAND_ANY_AUDIO: {
    readonly type: "object";
    readonly required: readonly ["code", "parameters", "indent"];
    readonly properties: {
        readonly code: {
            readonly type: "integer";
            readonly enum: readonly [132, 133, 139, 241, 245, 249, 250];
        };
        readonly indent: {
            readonly type: "integer";
        };
        readonly parameters: {
            readonly type: "array";
            readonly minItems: 1;
            readonly maxItems: 1;
            readonly items: readonly [{
                type: "object";
                properties: {
                    name: {
                        type: "string";
                    };
                    volume: {
                        type: "integer";
                    };
                    pitch: {
                        type: "integer";
                    };
                    pan: {
                        type: "integer";
                    };
                };
                required: ["name", "volume", "pitch", "pan"];
                additionalProperties: false;
            }];
        };
    };
    readonly additionalProperties: false;
};
