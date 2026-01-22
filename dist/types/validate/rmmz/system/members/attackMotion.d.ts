export declare const SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION: {
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
