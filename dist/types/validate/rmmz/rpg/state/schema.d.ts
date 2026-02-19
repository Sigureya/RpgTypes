export declare const SCHEMA_DATA_STATE: {
    readonly type: "object";
    readonly required: readonly ["name", "id", "iconIndex", "message1", "message2", "message3", "message4", "restriction", "priority", "motion", "overlay", "removeAtBattleEnd", "removeByDamage", "removeByWalking", "removeByRestriction", "autoRemovalTiming", "minTurns", "maxTurns", "chanceByDamage", "stepsToRemove", "note"];
    readonly properties: {
        readonly name: {
            readonly type: "string";
        };
        readonly id: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly iconIndex: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly message1: {
            readonly type: "string";
        };
        readonly message2: {
            readonly type: "string";
        };
        readonly message3: {
            readonly type: "string";
        };
        readonly message4: {
            readonly type: "string";
        };
        readonly restriction: {
            readonly type: "integer";
        };
        readonly priority: {
            readonly type: "integer";
        };
        readonly motion: {
            readonly type: "integer";
        };
        readonly overlay: {
            readonly type: "integer";
        };
        readonly removeAtBattleEnd: {
            readonly type: "boolean";
        };
        readonly removeByDamage: {
            readonly type: "boolean";
        };
        readonly removeByWalking: {
            readonly type: "boolean";
        };
        readonly removeByRestriction: {
            readonly type: "boolean";
        };
        readonly messageType: {
            readonly type: "integer";
        };
        readonly releaseByDamage: {
            readonly type: "boolean";
        };
        readonly autoRemovalTiming: {
            readonly type: "integer";
        };
        readonly minTurns: {
            readonly type: "integer";
        };
        readonly maxTurns: {
            readonly type: "integer";
        };
        readonly chanceByDamage: {
            readonly type: "integer";
        };
        readonly stepsToRemove: {
            readonly type: "integer";
        };
        readonly note: {
            readonly type: "string";
        };
        readonly traits: {
            type: "array";
            items: {
                type: "object";
                properties: {
                    code: {
                        type: "integer";
                    };
                    dataId: {
                        type: "integer";
                    };
                    value: {
                        type: "integer";
                    };
                };
                required: ("code" | "value" | "dataId")[];
            };
        };
    };
};
