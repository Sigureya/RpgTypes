export declare const SCHEMA_SYSTEM_AUDIOFILES: {
    readonly type: "object";
    readonly required: ["battleBgm", "victoryMe", "gameoverMe", "titleBgm", "defeatMe"];
    readonly additionalProperties: {
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
        readonly additionalProperties: true;
    };
};
