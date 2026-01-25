export declare const SCHEMA_SYSTEM_TERMS_CORE: {
    readonly additionalProperties: false;
    readonly type: "object";
    readonly required: ("params" | "messages" | "commands" | "basic")[];
    readonly properties: {
        messages: {
            readonly type: "object";
            readonly additionalProperties: false;
            readonly required: readonly ["actionFailure", "actorDamage", "actorDrain", "actorGain", "actorLoss", "actorNoDamage", "actorNoHit", "actorRecovery", "alwaysDash", "autosave", "bgmVolume", "bgsVolume", "buffAdd", "buffRemove", "commandRemember", "counterAttack", "criticalToActor", "criticalToEnemy", "debuffAdd", "defeat", "emerge", "enemyDamage", "enemyDrain", "enemyGain", "enemyLoss", "enemyNoDamage", "enemyNoHit", "enemyRecovery", "escapeFailure", "escapeStart", "evasion", "expNext", "expTotal", "file", "levelUp", "loadMessage", "magicEvasion", "magicReflection", "meVolume", "obtainExp", "obtainGold", "obtainItem", "obtainSkill", "partyName", "possession", "preemptive", "saveMessage", "seVolume", "substitute", "surprise", "touchUI", "useItem", "victory"];
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
