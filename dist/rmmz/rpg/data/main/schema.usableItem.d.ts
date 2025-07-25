declare const SCHEMA_DAMATE: {
    readonly type: "object";
    readonly properties: {
        readonly type: {
            readonly type: "integer";
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
        };
        readonly critical: {
            readonly type: "boolean";
        };
    };
    readonly required: readonly ["type", "elementId", "formula", "variance", "critical"];
    readonly additionalProperties: false;
};
declare const SCHEMA_EFFECT: {
    readonly type: "object";
    readonly properties: {
        readonly code: {
            readonly type: "integer";
        };
        readonly dataId: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly value1: {
            readonly type: "integer";
        };
        readonly value2: {
            readonly type: "integer";
        };
    };
    readonly required: readonly ["code", "dataId", "value1", "value2"];
    readonly additionalProperties: false;
};
declare const SCHEMA_DATA_SKILL: {
    readonly type: "object";
    readonly required: readonly ["name", "id", "description", "iconIndex", "message1", "message2", "messageType", "mpCost", "requiredWtypeId1", "requiredWtypeId2", "stypeId", "tpCost", "animationId", "hitType", "occasion", "repeats", "scope", "speed", "successRate", "tpGain", "note", "effects"];
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
        readonly message1: {
            readonly type: "string";
        };
        readonly message2: {
            readonly type: "string";
        };
        readonly messageType: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly mpCost: {
            readonly type: "integer";
        };
        readonly requiredWtypeId1: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly requiredWtypeId2: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly stypeId: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly tpCost: {
            readonly type: "integer";
        };
        readonly animationId: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly hitType: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly occasion: {
            readonly type: "integer";
        };
        readonly repeats: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly scope: {
            readonly type: "integer";
        };
        readonly speed: {
            readonly type: "integer";
        };
        readonly successRate: {
            readonly type: "integer";
        };
        readonly tpGain: {
            readonly type: "integer";
        };
        readonly note: {
            readonly type: "string";
        };
        readonly effects: {
            type: "array";
            items: {
                readonly type: "object";
                readonly properties: {
                    readonly code: {
                        readonly type: "integer";
                    };
                    readonly dataId: {
                        readonly type: "integer";
                        readonly minimum: 0;
                    };
                    readonly value1: {
                        readonly type: "integer";
                    };
                    readonly value2: {
                        readonly type: "integer";
                    };
                };
                readonly required: readonly ["code", "dataId", "value1", "value2"];
                readonly additionalProperties: false;
            };
        };
        readonly damage: {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "integer";
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
                };
                readonly critical: {
                    readonly type: "boolean";
                };
            };
            readonly required: readonly ["type", "elementId", "formula", "variance", "critical"];
            readonly additionalProperties: false;
        };
    };
    readonly additionalProperties: false;
};
declare const SCHEMA_DATA_ITEM: {
    readonly type: "object";
    readonly required: readonly ["name", "id", "description", "iconIndex", "note", "animationId", "hitType", "occasion", "repeats", "scope", "speed", "successRate", "tpGain", "consumable", "price", "effects"];
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
        readonly note: {
            readonly type: "string";
        };
        readonly animationId: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly hitType: {
            readonly type: "integer";
        };
        readonly occasion: {
            readonly type: "integer";
        };
        readonly repeats: {
            readonly type: "integer";
        };
        readonly scope: {
            readonly type: "integer";
        };
        readonly speed: {
            readonly type: "integer";
        };
        readonly successRate: {
            readonly type: "integer";
        };
        readonly tpGain: {
            readonly type: "integer";
        };
        readonly consumable: {
            readonly type: "boolean";
        };
        readonly price: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly itypeId: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly effects: {
            type: "array";
            items: {
                readonly type: "object";
                readonly properties: {
                    readonly code: {
                        readonly type: "integer";
                    };
                    readonly dataId: {
                        readonly type: "integer";
                        readonly minimum: 0;
                    };
                    readonly value1: {
                        readonly type: "integer";
                    };
                    readonly value2: {
                        readonly type: "integer";
                    };
                };
                readonly required: readonly ["code", "dataId", "value1", "value2"];
                readonly additionalProperties: false;
            };
        };
        readonly damage: {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "integer";
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
                };
                readonly critical: {
                    readonly type: "boolean";
                };
            };
            readonly required: readonly ["type", "elementId", "formula", "variance", "critical"];
            readonly additionalProperties: false;
        };
    };
};
export { SCHEMA_DATA_ITEM, SCHEMA_DATA_SKILL, SCHEMA_EFFECT, SCHEMA_DAMATE };
