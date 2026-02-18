export declare const SCHEMA_DATA_SYSTEM_MV: {
    readonly additionalProperties: false;
    readonly $defs: {
        readonly Audio: {
            readonly type: "object";
            readonly required: readonly ["name", "volume", "pitch", "pan"];
            readonly additionalProperties: false;
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
        };
        readonly Vehicle: {
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
                        };
                        readonly pitch: {
                            readonly type: "integer";
                        };
                        readonly pan: {
                            readonly type: "integer";
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
                };
                readonly startY: {
                    readonly type: "integer";
                    readonly minimum: 0;
                };
            };
        };
        readonly AttackMotion: {
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
        readonly TestBattler: {
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
        readonly MenuCommands: {
            readonly type: "array";
            readonly maxItems: 6;
            readonly minItems: 6;
            readonly items: {
                readonly type: "boolean";
            };
        };
        readonly TermsCommands: {
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
        readonly TermsBasic: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
            readonly minItems: 10;
            readonly maxItems: 10;
        };
        readonly TermsParams: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
                readonly minLength: 0;
            };
            readonly minItems: 10;
            readonly maxItems: 10;
        };
        readonly TermsMessages: {
            readonly type: "object";
            readonly additionalProperties: false;
            readonly required: ("enemyDamage" | "actorDamage" | "useItem" | "alwaysDash" | "commandRemember" | "bgmVolume" | "bgsVolume" | "meVolume" | "seVolume" | "possession" | "expTotal" | "expNext" | "saveMessage" | "loadMessage" | "file" | "partyName" | "emerge" | "preemptive" | "surprise" | "escapeStart" | "escapeFailure" | "victory" | "defeat" | "obtainExp" | "obtainGold" | "obtainItem" | "levelUp" | "obtainSkill" | "criticalToEnemy" | "criticalToActor" | "actorRecovery" | "actorGain" | "actorLoss" | "actorDrain" | "actorNoDamage" | "actorNoHit" | "enemyRecovery" | "enemyGain" | "enemyLoss" | "enemyDrain" | "enemyNoDamage" | "enemyNoHit" | "evasion" | "magicEvasion" | "magicReflection" | "counterAttack" | "substitute" | "buffAdd" | "debuffAdd" | "buffRemove" | "actionFailure")[];
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
    };
    readonly type: "object";
    readonly required: ("sounds" | "optDisplayTp" | "optDrawTitle" | "optExtraExp" | "optFloorDeath" | "optFollowers" | "optSideView" | "optSlipDeath" | "optTransparent" | "startMapId" | "startX" | "startY" | "partyMembers" | "weaponTypes" | "skillTypes" | "elements" | "variables" | "equipTypes" | "switches" | "armorTypes" | "gameTitle" | "currencyUnit" | "magicSkills" | "title1Name" | "title2Name" | "terms" | "menuCommands" | "titleBgm" | "battleBgm" | "gameoverMe" | "defeatMe" | "victoryMe" | "boat" | "ship" | "airship" | "editMapId" | "battlerHue" | "battlerName" | "testTroopId" | "testBattlers" | "battleback1Name" | "battleback2Name" | "windowTone" | "attackMotions" | "locale" | "versionId")[];
    readonly properties: {
        gameTitle: {
            type: string;
        };
        currencyUnit: {
            type: string;
        };
        attackMotions: {
            items: {
                $ref: string;
            };
            type: string;
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
        sounds: {
            type: string;
            maxItems: number;
            minItems: number;
            items: {
                $ref: string;
            };
        };
        menuCommands: {
            $ref: string;
        };
        ship: {
            $ref: string;
        };
        boat: {
            $ref: string;
        };
        airship: {
            $ref: string;
        };
        testBattlers: {
            type: string;
            items: {
                $ref: string;
            };
        };
        terms: {
            type: string;
            additionalProperties: boolean;
            required: string[];
            properties: {
                messages: {
                    $ref: string;
                };
                commands: {
                    $ref: string;
                };
                basic: {
                    $ref: string;
                };
                params: {
                    $ref: string;
                };
            };
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
        optSideView: {
            type: string;
        };
        optSlipDeath: {
            type: string;
        };
        optTransparent: {
            type: string;
        };
        optDrawTitle: {
            type: string;
        };
        optExtraExp: {
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
        partyMembers: {
            type: string;
            items: {
                type: string;
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
    };
};
