export declare const SCHEMA_SYSTEM_TEST_BATTLER: {
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
