declare const SCHEMA_DATA_WEAPON: {
    readonly type: "object";
    readonly required: readonly ["name", "id", "description", "iconIndex", "price", "params", "traits", "note", "etypeId", "animationId"];
    readonly properties: {
        readonly name: {
            readonly type: "string";
        };
        readonly id: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly description: {
            readonly type: "string";
        };
        readonly iconIndex: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly price: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly note: {
            readonly type: "string";
        };
        readonly etypeId: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly wtypeId: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly animationId: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly params: {
            readonly type: "array";
            readonly items: readonly [{
                readonly type: "integer";
            }, {
                readonly type: "integer";
            }, {
                readonly type: "integer";
            }, {
                readonly type: "integer";
            }, {
                readonly type: "integer";
            }, {
                readonly type: "integer";
            }, {
                readonly type: "integer";
            }, {
                readonly type: "integer";
            }];
            readonly minItems: 8;
            readonly maxItems: 8;
        };
        readonly damage: {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "integer";
                    readonly minimum: 0;
                };
                readonly elementId: {
                    readonly type: "integer";
                    readonly minimum: 0;
                };
                readonly formula: {
                    readonly type: "string";
                };
                readonly variance: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 100;
                };
                readonly critical: {
                    readonly type: "boolean";
                    readonly default: false;
                };
            };
            readonly required: readonly ["type", "elementId", "formula", "variance", "critical"];
        };
        readonly traits: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly code: {
                        readonly type: "integer";
                    };
                    readonly dataId: {
                        readonly type: "integer";
                    };
                    readonly value: {
                        readonly type: "integer";
                    };
                };
                readonly required: readonly ["code", "dataId", "value"];
            };
        };
    };
};
export default SCHEMA_DATA_WEAPON;
