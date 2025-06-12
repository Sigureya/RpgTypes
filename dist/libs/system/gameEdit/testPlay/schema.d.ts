export declare const SCHEMA_SYSTEM_TEST_BATTLER: {
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
export declare const SCHEMA_SYSTEM_TEST_PLAY: {
    readonly additionalProperties: false;
    readonly type: "object";
    readonly required: readonly ["testBattlers", "testTroopId", "battleback1Name", "battleback2Name"];
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
    };
};
