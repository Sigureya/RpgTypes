export declare const SCHEMA_SYSTEM_VEHICLE: {
    readonly additionalProperties: false;
    readonly type: "object";
    readonly required: readonly ["characterIndex", "characterName", "bgm", "startMapId", "startX", "startY"];
    readonly properties: {
        readonly characterIndex: {
            readonly type: "integer";
            readonly minimum: 0;
            readonly maximum: 7;
        };
        readonly characterName: {
            readonly type: "string";
            readonly minLength: 1;
        };
        readonly bgm: {
            readonly type: "object";
            readonly additionalProperties: false;
            readonly required: readonly ["name", "volume", "pitch", "pan"];
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
                    readonly minimum: 50;
                    readonly maximum: 150;
                };
                readonly pan: {
                    readonly type: "integer";
                    readonly minimum: -100;
                    readonly maximum: 100;
                };
            };
        };
        readonly startMapId: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly startX: {
            readonly type: "integer";
            readonly minimum: 0;
            readonly maximum: 5000;
        };
        readonly startY: {
            readonly type: "integer";
            readonly minimum: 0;
            readonly maximum: 5000;
        };
    };
};
