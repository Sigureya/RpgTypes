export declare const SCHEMA_SYSTEM_BATTLE_RULE_RMMZ: {
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
};
