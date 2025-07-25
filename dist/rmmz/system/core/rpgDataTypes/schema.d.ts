declare const SCHEMA_SYSTEM_RPG_DATA_NAMES: {
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
};
export default SCHEMA_SYSTEM_RPG_DATA_NAMES;
