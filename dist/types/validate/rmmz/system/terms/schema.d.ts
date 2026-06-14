export declare const SCHEMA_SYSTEM_TEXTS: {
    readonly type: "object";
    readonly required: readonly ["gameTitle", "currencyUnit", "equipTypes", "armorTypes", "weaponTypes", "elements", "skillTypes", "terms"];
    readonly properties: {
        readonly gameTitle: {
            readonly type: "string";
        };
        readonly currencyUnit: {
            readonly type: "string";
        };
        readonly equipTypes: {
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
        readonly weaponTypes: {
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
        readonly skillTypes: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly terms: {
            readonly type: "object";
            readonly required: readonly ["basic", "commands", "messages", "params"];
            readonly properties: {
                readonly basic: {
                    readonly type: "object";
                    readonly required: readonly ["level", "hp", "mp", "tp", "levelA", "hpA", "mpA", "tpA", "experience", "exp"];
                    readonly properties: {
                        readonly level: {
                            readonly type: "string";
                        };
                        readonly hp: {
                            readonly type: "string";
                        };
                        readonly mp: {
                            readonly type: "string";
                        };
                        readonly tp: {
                            readonly type: "string";
                        };
                        readonly levelA: {
                            readonly type: "string";
                        };
                        readonly hpA: {
                            readonly type: "string";
                        };
                        readonly mpA: {
                            readonly type: "string";
                        };
                        readonly tpA: {
                            readonly type: "string";
                        };
                        readonly experience: {
                            readonly type: "string";
                        };
                        readonly exp: {
                            readonly type: "string";
                        };
                    };
                };
                readonly commands: {
                    readonly type: "object";
                    readonly required: readonly ["fight", "escape", "attack", "guard", "item", "skill", "equip", "status", "formation", "save", "gameEnd", "options", "weapon", "armor", "cancel", "clear", "continueGame", "toTitle", "sell", "keyItem", "equip2", "optimize", "newGame", "buy"];
                    readonly properties: {
                        readonly fight: {
                            readonly type: "string";
                        };
                        readonly escape: {
                            readonly type: "string";
                        };
                        readonly attack: {
                            readonly type: "string";
                        };
                        readonly guard: {
                            readonly type: "string";
                        };
                        readonly item: {
                            readonly type: "string";
                        };
                        readonly skill: {
                            readonly type: "string";
                        };
                        readonly equip: {
                            readonly type: "string";
                        };
                        readonly status: {
                            readonly type: "string";
                        };
                        readonly formation: {
                            readonly type: "string";
                        };
                        readonly save: {
                            readonly type: "string";
                        };
                        readonly gameEnd: {
                            readonly type: "string";
                        };
                        readonly options: {
                            readonly type: "string";
                        };
                        readonly weapon: {
                            readonly type: "string";
                        };
                        readonly armor: {
                            readonly type: "string";
                        };
                        readonly cancel: {
                            readonly type: "string";
                        };
                        readonly clear: {
                            readonly type: "string";
                        };
                        readonly continueGame: {
                            readonly type: "string";
                        };
                        readonly toTitle: {
                            readonly type: "string";
                        };
                        readonly sell: {
                            readonly type: "string";
                        };
                        readonly keyItem: {
                            readonly type: "string";
                        };
                        readonly equip2: {
                            readonly type: "string";
                        };
                        readonly optimize: {
                            readonly type: "string";
                        };
                        readonly newGame: {
                            readonly type: "string";
                        };
                        readonly buy: {
                            readonly type: "string";
                        };
                    };
                };
                readonly messages: {
                    readonly type: "object";
                    readonly required: readonly ["actorDamage", "actorGain", "actorLoss", "actorDrain", "enemyDamage", "enemyRecovery", "enemyGain", "enemyLoss", "enemyDrain", "touchUI", "autosave", "alwaysDash", "commandRemember", "bgmVolume", "bgsVolume", "meVolume", "seVolume", "possession", "expTotal", "expNext", "saveMessage", "loadMessage", "file", "partyName", "emerge", "preemptive", "surprise", "escapeStart", "escapeFailure", "victory", "defeat", "obtainExp", "obtainGold", "obtainItem", "obtainSkill", "levelUp", "useItem", "criticalToEnemy", "criticalToActor", "actorRecovery", "actorNoDamage", "actorNoHit", "enemyNoDamage", "enemyNoHit", "evasion", "magicEvasion", "magicReflection", "counterAttack", "substitute", "buffAdd", "debuffAdd", "buffRemove", "actionFailure"];
                    readonly properties: {
                        readonly hpRecover: {
                            readonly type: "string";
                        };
                        readonly mpRecover: {
                            readonly type: "string";
                        };
                        readonly tpRecover: {
                            readonly type: "string";
                        };
                        readonly actorDamage: {
                            readonly type: "string";
                        };
                        readonly actorRecover: {
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
                        readonly enemyDamage: {
                            readonly type: "string";
                        };
                        readonly enemyRecover: {
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
                        readonly critical: {
                            readonly type: "string";
                        };
                        readonly touchUI: {
                            readonly type: "string";
                        };
                        readonly autosave: {
                            readonly type: "string";
                        };
                        readonly alwaysDash: {
                            readonly type: "string";
                        };
                        readonly commandRemember: {
                            readonly type: "string";
                        };
                        readonly bgmVolume: {
                            readonly type: "string";
                        };
                        readonly bgsVolume: {
                            readonly type: "string";
                        };
                        readonly meVolume: {
                            readonly type: "string";
                        };
                        readonly seVolume: {
                            readonly type: "string";
                        };
                        readonly possession: {
                            readonly type: "string";
                        };
                        readonly expTotal: {
                            readonly type: "string";
                        };
                        readonly expNext: {
                            readonly type: "string";
                        };
                        readonly saveMessage: {
                            readonly type: "string";
                        };
                        readonly loadMessage: {
                            readonly type: "string";
                        };
                        readonly file: {
                            readonly type: "string";
                        };
                        readonly partyName: {
                            readonly type: "string";
                        };
                        readonly emerge: {
                            readonly type: "string";
                        };
                        readonly preemptive: {
                            readonly type: "string";
                        };
                        readonly surprise: {
                            readonly type: "string";
                        };
                        readonly escapeStart: {
                            readonly type: "string";
                        };
                        readonly escapeFailure: {
                            readonly type: "string";
                        };
                        readonly victory: {
                            readonly type: "string";
                        };
                        readonly defeat: {
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
                        readonly levelUp: {
                            readonly type: "string";
                        };
                        readonly useItem: {
                            readonly type: "string";
                        };
                        readonly criticalToEnemy: {
                            readonly type: "string";
                        };
                        readonly criticalToActor: {
                            readonly type: "string";
                        };
                        readonly actorRecovery: {
                            readonly type: "string";
                        };
                        readonly actorNoDamage: {
                            readonly type: "string";
                        };
                        readonly actorNoHit: {
                            readonly type: "string";
                        };
                        readonly enemyNoDamage: {
                            readonly type: "string";
                        };
                        readonly enemyNoHit: {
                            readonly type: "string";
                        };
                        readonly enemyRecovery: {
                            readonly type: "string";
                        };
                        readonly evasion: {
                            readonly type: "string";
                        };
                        readonly magicEvasion: {
                            readonly type: "string";
                        };
                        readonly magicReflection: {
                            readonly type: "string";
                        };
                        readonly counterAttack: {
                            readonly type: "string";
                        };
                        readonly substitute: {
                            readonly type: "string";
                        };
                        readonly buffAdd: {
                            readonly type: "string";
                        };
                        readonly debuffAdd: {
                            readonly type: "string";
                        };
                        readonly buffRemove: {
                            readonly type: "string";
                        };
                        readonly actionFailure: {
                            readonly type: "string";
                        };
                    };
                };
                readonly params: {
                    readonly type: "object";
                    readonly required: readonly ["mhp", "mmp", "atk", "def", "mat", "mdf", "agi", "luk", "hit", "eva"];
                    readonly properties: {
                        readonly mhp: {
                            readonly type: "string";
                        };
                        readonly mmp: {
                            readonly type: "string";
                        };
                        readonly atk: {
                            readonly type: "string";
                        };
                        readonly def: {
                            readonly type: "string";
                        };
                        readonly mat: {
                            readonly type: "string";
                        };
                        readonly mdf: {
                            readonly type: "string";
                        };
                        readonly agi: {
                            readonly type: "string";
                        };
                        readonly luk: {
                            readonly type: "string";
                        };
                        readonly hit: {
                            readonly type: "string";
                        };
                        readonly eva: {
                            readonly type: "string";
                        };
                    };
                };
            };
        };
    };
};
