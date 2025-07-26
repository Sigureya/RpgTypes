declare const SCHEMA_SYSTEM_PARTIAL_BUNDLE: {
    readonly additionalProperties: false;
    readonly required: readonly ["airship", "boat", "ship", "advanced", "attackMotions"];
    readonly type: "object";
    readonly properties: {
        readonly airship: {
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
        readonly boat: {
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
        readonly ship: {
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
        readonly advanced: {
            readonly type: "object";
            readonly properties: {
                readonly gameId: {
                    readonly type: "integer";
                };
                readonly screenWidth: {
                    readonly type: "integer";
                };
                readonly screenHeight: {
                    readonly type: "integer";
                };
                readonly uiAreaWidth: {
                    readonly type: "integer";
                };
                readonly uiAreaHeight: {
                    readonly type: "integer";
                };
                readonly windowOpacity: {
                    readonly type: "integer";
                };
                readonly screenScale: {
                    readonly type: "number";
                };
                readonly numberFontFilename: {
                    readonly type: "string";
                };
                readonly mainFontFilename: {
                    readonly type: "string";
                };
                readonly fallbackFonts: {
                    readonly type: "string";
                };
                readonly fontSize: {
                    readonly type: "integer";
                };
            };
            readonly required: readonly ["gameId", "screenWidth", "screenHeight", "uiAreaWidth", "uiAreaHeight", "windowOpacity", "screenScale", "numberFontFilename", "mainFontFilename", "fallbackFonts", "fontSize"];
            readonly additionalProperties: false;
        };
        readonly attackMotions: {
            type: "array";
            items: {
                readonly type: "object";
                readonly additionalProperties: false;
                readonly required: readonly ["type", "weaponImageId"];
                readonly properties: {
                    readonly type: {
                        readonly type: "number";
                    };
                    readonly weaponImageId: {
                        readonly type: "number";
                    };
                };
            };
        };
    };
};
export default SCHEMA_SYSTEM_PARTIAL_BUNDLE;
