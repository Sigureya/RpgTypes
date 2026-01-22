export declare const SCHEMA_DATA_SYSTEM2: {
    readonly $defs: {
        readonly audio: {
            readonly type: "object";
            readonly required: readonly ["name", "volume", "pitch", "pan"];
            readonly additionalProperties: false;
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
    };
    readonly type: "object";
    readonly required: readonly ["gameTitle", "currencyUnit", "terms", "ship", "boat", "airship", "advanced", "titleBgm", "battleBgm", "gameoverMe", "victoryMe", "defeatMe", "attackMotions", "optAutosave", "optDisplayTp", "optFloorDeath", "optFollowers", "optKeyItemsNumber", "optSideView", "optSlipDeath", "optTransparent", "optSplashScreen", "optDrawTitle", "optExtraExp", "optMessageSkip", "startMapId", "startX", "startY", "faceSize", "tileSize", "iconSize", "battleSystem", "elements", "weaponTypes", "armorTypes", "equipTypes", "skillTypes", "switches", "variables", "magicSkills", "battleback1Name", "battleback2Name", "testTroopId", "partyMembersArray", "editor", "testBattlers", "editMapId", "battlerHue", "battlerName", "sounds", "title1Name", "title2Name", "versionId", "locale", "windowTone"];
    readonly properties: {
        gameTitle: {
            type: string;
        };
        currencyUnit: {
            type: string;
        };
        terms: {
            readonly additionalProperties: false;
            readonly type: "object";
            readonly required: ("params" | "messages" | "commands" | "basic")[];
            readonly properties: {
                messages: {
                    readonly type: "object";
                    readonly additionalProperties: false;
                    readonly required: readonly ["actionFailure", "actorDamage", "actorNoDamage", "actorRecovery", "actorGain", "actorLoss", "actorDrain", "alwaysDash", "bgmVolume", "bgsVolume", "commandRemember", "criticalToActor", "criticalToEnemy", "counterAttack", "debuffAdd", "defeat", "enemyDamage", "enemyNoDamage", "enemyRecovery", "enemyGain", "enemyLoss", "enemyDrain", "evasion", "expNext", "expTotal", "escapeFailure", "escapeStart", "file", "loadMessage", "meVolume", "magicEvasion", "magicReflection", "obtainExp", "obtainGold", "obtainItem", "obtainSkill", "partyName", "preemptive", "saveMessage", "seVolume", "substitute", "touchUI", "victory", "useItem"];
                    readonly properties: {
                        readonly actionFailure: {
                            readonly type: "string";
                        };
                        readonly actorDamage: {
                            readonly type: "string";
                        };
                        readonly actorNoDamage: {
                            readonly type: "string";
                        };
                        readonly actorRecovery: {
                            readonly type: "string";
                        };
                        readonly actorGain: {
                            readonly type: "string";
                        };
                        readonly actorLoss: {
                            readonly type: "string";
                        };
                        readonly actorDrain: {
                            readonly type: "string";
                        };
                        readonly alwaysDash: {
                            readonly type: "string";
                        };
                        readonly bgmVolume: {
                            readonly type: "string";
                        };
                        readonly bgsVolume: {
                            readonly type: "string";
                        };
                        readonly commandRemember: {
                            readonly type: "string";
                        };
                        readonly criticalToActor: {
                            readonly type: "string";
                        };
                        readonly criticalToEnemy: {
                            readonly type: "string";
                        };
                        readonly counterAttack: {
                            readonly type: "string";
                        };
                        readonly debuffAdd: {
                            readonly type: "string";
                        };
                        readonly defeat: {
                            readonly type: "string";
                        };
                        readonly enemyDamage: {
                            readonly type: "string";
                        };
                        readonly enemyNoDamage: {
                            readonly type: "string";
                        };
                        readonly enemyRecovery: {
                            readonly type: "string";
                        };
                        readonly enemyGain: {
                            readonly type: "string";
                        };
                        readonly enemyLoss: {
                            readonly type: "string";
                        };
                        readonly enemyDrain: {
                            readonly type: "string";
                        };
                        readonly evasion: {
                            readonly type: "string";
                        };
                        readonly expNext: {
                            readonly type: "string";
                        };
                        readonly expTotal: {
                            readonly type: "string";
                        };
                        readonly escapeFailure: {
                            readonly type: "string";
                        };
                        readonly escapeStart: {
                            readonly type: "string";
                        };
                        readonly file: {
                            readonly type: "string";
                        };
                        readonly loadMessage: {
                            readonly type: "string";
                        };
                        readonly meVolume: {
                            readonly type: "string";
                        };
                        readonly magicEvasion: {
                            readonly type: "string";
                        };
                        readonly magicReflection: {
                            readonly type: "string";
                        };
                        readonly obtainExp: {
                            readonly type: "string";
                        };
                        readonly obtainGold: {
                            readonly type: "string";
                        };
                        readonly obtainItem: {
                            readonly type: "string";
                        };
                        readonly obtainSkill: {
                            readonly type: "string";
                        };
                        readonly partyName: {
                            readonly type: "string";
                        };
                        readonly preemptive: {
                            readonly type: "string";
                        };
                        readonly saveMessage: {
                            readonly type: "string";
                        };
                        readonly seVolume: {
                            readonly type: "string";
                        };
                        readonly substitute: {
                            readonly type: "string";
                        };
                        readonly touchUI: {
                            readonly type: "string";
                        };
                        readonly victory: {
                            readonly type: "string";
                        };
                        readonly useItem: {
                            readonly type: "string";
                        };
                        readonly buffAdd: {
                            readonly type: "string";
                        };
                        readonly buffRemove: {
                            readonly type: "string";
                        };
                        readonly actorNoHit: {
                            readonly type: "string";
                        };
                        readonly enemyNoHit: {
                            readonly type: "string";
                        };
                        readonly autosave: {
                            readonly type: "string";
                        };
                        readonly emerge: {
                            readonly type: "string";
                        };
                        readonly levelUp: {
                            readonly type: "string";
                        };
                        readonly possession: {
                            readonly type: "string";
                        };
                        readonly surprise: {
                            readonly type: "string";
                        };
                    };
                };
                commands: {
                    readonly type: "array";
                    readonly items: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                        readonly nullable: true;
                    }, {
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                        readonly nullable: true;
                    }, {
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                    }];
                    readonly minItems: 26;
                    readonly maxItems: 26;
                };
                basic: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly minItems: 10;
                    readonly maxItems: 10;
                };
                params: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly minLength: 0;
                    };
                    readonly minItems: 10;
                    readonly maxItems: 10;
                };
            };
        };
        ship: {
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
        boat: {
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
        airship: {
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
        advanced: {
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
        titleBgm: {
            $ref: string;
        };
        battleBgm: {
            $ref: string;
        };
        gameoverMe: {
            $ref: string;
        };
        victoryMe: {
            $ref: string;
        };
        defeatMe: {
            $ref: string;
        };
        attackMotions: {
            type: string;
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
        optAutosave: {
            type: string;
        };
        optDisplayTp: {
            type: string;
        };
        optFloorDeath: {
            type: string;
        };
        optFollowers: {
            type: string;
        };
        optKeyItemsNumber: {
            type: string;
        };
        optSideView: {
            type: string;
        };
        optSlipDeath: {
            type: string;
        };
        optTransparent: {
            type: string;
        };
        optSplashScreen: {
            type: string;
        };
        optDrawTitle: {
            type: string;
        };
        optExtraExp: {
            type: string;
        };
        optMessageSkip: {
            type: string;
        };
        startMapId: {
            type: string;
            minimum: number;
        };
        startX: {
            type: string;
            minimum: number;
        };
        startY: {
            type: string;
            minimum: number;
        };
        faceSize: {
            type: string;
            minimum: number;
        };
        tileSize: {
            type: string;
            minimum: number;
        };
        iconSize: {
            type: string;
            minimum: number;
        };
        battleSystem: {
            type: string;
            minimum: number;
            maximum: number;
        };
        elements: {
            type: string;
            items: {
                type: string;
            };
        };
        weaponTypes: {
            type: string;
            items: {
                type: string;
            };
        };
        armorTypes: {
            type: string;
            items: {
                type: string;
            };
        };
        equipTypes: {
            type: string;
            items: {
                type: string;
            };
        };
        skillTypes: {
            type: string;
            items: {
                type: string;
            };
        };
        switches: {
            type: string;
            items: {
                type: string;
            };
        };
        variables: {
            type: string;
            items: {
                type: string;
            };
        };
        magicSkills: {
            type: string;
            items: {
                type: string;
            };
        };
        battleback1Name: {
            type: string;
        };
        battleback2Name: {
            type: string;
        };
        testTroopId: {
            type: string;
            minimum: number;
        };
        partyMembersArray: {
            type: string;
            items: {
                type: string;
            };
        };
        editor: {
            readonly additionalProperties: false;
            readonly type: "object";
            readonly required: readonly ["messageWidth1", "messageWidth2", "jsonFormatLevel"];
            readonly properties: {
                readonly messageWidth1: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 1000;
                };
                readonly messageWidth2: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 1000;
                };
                readonly jsonFormatLevel: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 4;
                };
            };
        };
        testBattlers: {
            type: string;
            items: {
                readonly type: "object";
                readonly required: readonly ["actorId", "level", "equips"];
                readonly additionalProperties: false;
                readonly properties: {
                    readonly level: {
                        readonly type: "integer";
                        readonly minimum: 0;
                    };
                    readonly actorId: {
                        readonly type: "integer";
                        readonly minimum: 0;
                    };
                    readonly equips: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "integer";
                        };
                    };
                };
            };
        };
        editMapId: {
            type: string;
            minimum: number;
        };
        battlerHue: {
            type: string;
        };
        battlerName: {
            type: string;
        };
        sounds: {
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
        title1Name: {
            type: string;
        };
        title2Name: {
            type: string;
        };
        versionId: {
            type: string;
        };
        locale: {
            type: string;
        };
        windowTone: {
            type: string;
            items: {
                type: string;
                minimum: number;
                maximum: number;
            };
        };
        itemCategories: {};
        menuCommands: {};
    };
};
