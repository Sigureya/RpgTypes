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
