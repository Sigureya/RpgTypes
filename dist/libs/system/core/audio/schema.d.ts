export declare const SCHEMA_SYSTEM_AUDIOFILES: {
    readonly additionalProperties: false;
    readonly type: "object";
    readonly required: readonly ["battleBgm", "victoryMe", "gameoverMe", "titleBgm", "defeatMe", "sounds"];
    readonly properties: {
        readonly battleBgm: {
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                };
                readonly volume: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 100;
                };
                readonly pitch: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 100;
                };
                readonly pan: {
                    readonly type: "integer";
                    readonly minimum: -100;
                    readonly maximum: 100;
                };
            };
            readonly required: readonly ["name", "volume", "pitch", "pan"];
            readonly additionalProperties: false;
        };
        readonly victoryMe: {
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                };
                readonly volume: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 100;
                };
                readonly pitch: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 100;
                };
                readonly pan: {
                    readonly type: "integer";
                    readonly minimum: -100;
                    readonly maximum: 100;
                };
            };
            readonly required: readonly ["name", "volume", "pitch", "pan"];
            readonly additionalProperties: false;
        };
        readonly gameoverMe: {
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                };
                readonly volume: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 100;
                };
                readonly pitch: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 100;
                };
                readonly pan: {
                    readonly type: "integer";
                    readonly minimum: -100;
                    readonly maximum: 100;
                };
            };
            readonly required: readonly ["name", "volume", "pitch", "pan"];
            readonly additionalProperties: false;
        };
        readonly titleBgm: {
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                };
                readonly volume: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 100;
                };
                readonly pitch: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 100;
                };
                readonly pan: {
                    readonly type: "integer";
                    readonly minimum: -100;
                    readonly maximum: 100;
                };
            };
            readonly required: readonly ["name", "volume", "pitch", "pan"];
            readonly additionalProperties: false;
        };
        readonly defeatMe: {
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                };
                readonly volume: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 100;
                };
                readonly pitch: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 100;
                };
                readonly pan: {
                    readonly type: "integer";
                    readonly minimum: -100;
                    readonly maximum: 100;
                };
            };
            readonly required: readonly ["name", "volume", "pitch", "pan"];
            readonly additionalProperties: false;
        };
        readonly sounds: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly volume: {
                        readonly type: "integer";
                        readonly minimum: 0;
                        readonly maximum: 100;
                    };
                    readonly pitch: {
                        readonly type: "integer";
                        readonly minimum: 0;
                        readonly maximum: 100;
                    };
                    readonly pan: {
                        readonly type: "integer";
                        readonly minimum: -100;
                        readonly maximum: 100;
                    };
                };
                readonly required: readonly ["name", "volume", "pitch", "pan"];
                readonly additionalProperties: false;
            };
            readonly minItems: 24;
            readonly maxItems: 24;
        };
    };
};
