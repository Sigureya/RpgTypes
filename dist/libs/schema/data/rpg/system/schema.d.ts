export declare const SC_TESTBATTLERS: {
    readonly type: "array";
    readonly items: {
        readonly type: "object";
        readonly required: readonly ["actorId", "equips", "level"];
        readonly properties: {
            readonly actorId: {
                readonly type: "integer";
            };
            readonly level: {
                readonly type: "integer";
                readonly minimum: 1;
            };
            readonly equips: {
                readonly type: "array";
                readonly items: {
                    readonly type: "integer";
                };
            };
        };
        readonly additionalProperties: false;
    };
};
export declare const SCHEMA_SYSTEM_BOOLEAN_OPTIONS: {
    readonly type: "object";
    readonly required: ("optAutosave" | "optDisplayTp" | "optDrawTitle" | "optExtraExp" | "optFloorDeath" | "optFollowers" | "optKeyItemsNumber" | "optSideView" | "optSlipDeath" | "optTransparent" | "optSplashScreen" | "optMessageSkip")[];
    readonly properties: {
        readonly optAutosave: {
            readonly type: "boolean";
        };
        readonly optDisplayTp: {
            readonly type: "boolean";
        };
        readonly optDrawTitle: {
            readonly type: "boolean";
        };
        readonly optExtraExp: {
            readonly type: "boolean";
        };
        readonly optFloorDeath: {
            readonly type: "boolean";
        };
        readonly optFollowers: {
            readonly type: "boolean";
        };
        readonly optKeyItemsNumber: {
            readonly type: "boolean";
        };
        readonly optSideView: {
            readonly type: "boolean";
        };
        readonly optSlipDeath: {
            readonly type: "boolean";
        };
        readonly optTransparent: {
            readonly type: "boolean";
        };
        readonly optMessageSkip: {
            readonly type: "boolean";
        };
        readonly optSplashScreen: {
            readonly type: "boolean";
        };
    };
};
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
        readonly additionalProperties: false;
    };
};
