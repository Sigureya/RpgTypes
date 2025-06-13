import { Data_System } from './system';
export interface PartialSystemSchema {
    required: ReadonlyArray<keyof Data_System>;
    properties: Record<string, object>;
    additionalProperties: false;
    type: "object";
}
export declare const allSystemSchema: () => ({
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
} | {
    readonly type: "object";
    readonly additionalProperties: false;
    readonly required: readonly ["magicSkills", "battleSystem"];
    readonly properties: {
        readonly magicSkills: {
            readonly type: "array";
            readonly items: {
                readonly type: "number";
            };
            readonly minItems: 0;
            readonly uniqueItems: true;
        };
        readonly battleSystem: {
            readonly type: "number";
        };
    };
} | {
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
} | {
    readonly type: "object";
    readonly additionalProperties: false;
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
} | {
    readonly additionalProperties: false;
    readonly type: "object";
    readonly required: readonly ["startMapId", "startX", "startY", "partyMembersArray"];
    readonly properties: {
        readonly startMapId: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly startX: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly startY: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly partyMembersArray: {
            readonly type: "array";
            readonly items: {
                readonly type: "integer";
                readonly minimum: 0;
            };
        };
    };
} | {
    readonly additionalProperties: false;
    readonly type: "object";
    readonly required: readonly ["tileSize", "faceSize", "iconSize"];
    readonly properties: {
        readonly tileSize: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly faceSize: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly iconSize: {
            readonly type: "integer";
            readonly minimum: 0;
        };
    };
} | {
    readonly additionalProperties: false;
    readonly type: "object";
    readonly required: readonly ["title1Name", "title2Name"];
    readonly properties: {
        readonly title1Name: {
            readonly type: "string";
        };
        readonly title2Name: {
            readonly type: "string";
        };
    };
} | {
    readonly type: "object";
    readonly additionalProperties: false;
    readonly required: readonly ["locale", "versionId", "windowTone"];
    readonly properties: {
        readonly locale: {
            readonly type: "string";
        };
        readonly versionId: {
            readonly type: "number";
        };
        readonly windowTone: {
            readonly type: "array";
            readonly items: {
                readonly type: "number";
            };
            readonly minItems: 4;
            readonly maxItems: 4;
        };
    };
} | {
    readonly additionalProperties: false;
    readonly type: "object";
    readonly required: readonly ["weaponTypes", "skillTypes", "elements", "variables", "equipTypes", "switches", "armorTypes"];
    readonly properties: {
        readonly weaponTypes: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly skillTypes: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly elements: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly variables: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly equipTypes: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly switches: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly armorTypes: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
    };
} | {
    readonly required: ("terms" | "gameTitle" | "currencyUnit")[];
    readonly additionalProperties: false;
    readonly type: "object";
    readonly properties: {
        readonly currencyUnit: {
            type: "string";
        };
        readonly gameTitle: {
            type: "string";
        };
        readonly terms: {
            readonly additionalProperties: false;
            readonly type: "object";
            readonly required: ("messages" | "commands" | "params" | "basic")[];
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
                        readonly minLength: 1;
                    };
                    readonly minItems: 10;
                    readonly maxItems: 10;
                    readonly uniqueItems: true;
                };
            };
        };
    };
} | {
    readonly additionalProperties: false;
    readonly type: "object";
    readonly required: readonly ["battleback1Name", "battleback2Name", "battlerHue", "battlerName", "editMapId", "editor", "testBattlers", "testTroopId"];
    readonly properties: {
        readonly testBattlers: {
            readonly type: "array";
            readonly items: {
                readonly additionalProperties: false;
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
            };
        };
        readonly testTroopId: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly battleback1Name: {
            readonly type: "string";
        };
        readonly battleback2Name: {
            readonly type: "string";
        };
        readonly editMapId: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly battlerHue: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly battlerName: {
            readonly type: "string";
        };
        readonly editor: import('ajv').JSONSchemaType<import('./gameEdit').EditorSettings>;
    };
} | {
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
})[];
export declare const mergeSystemSchema: (list: ReadonlyArray<PartialSystemSchema>) => PartialSystemSchema;
