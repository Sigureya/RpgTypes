export declare const SCHEMA_DATA_SKILL: {
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
        };
        readonly mpCost: {
            readonly type: "integer";
        };
        readonly requiredWtypeId1: {
            readonly type: "integer";
        };
        readonly requiredWtypeId2: {
            readonly type: "integer";
        };
        readonly stypeId: {
            readonly type: "integer";
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
        readonly note: {
            readonly type: "string";
        };
        readonly effects: {
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
                    value1: {
                        type: "integer";
                    };
                    value2: {
                        type: "integer";
                    };
                };
                required: ("code" | "dataId" | "value1" | "value2")[];
                additionalProperties: false;
            };
        };
        readonly damage: {
            type: "object";
            properties: {
                type: {
                    type: "integer";
                };
                elementId: {
                    type: "integer";
                };
                formula: {
                    type: "string";
                };
                variance: {
                    type: "integer";
                };
                critical: {
                    type: "boolean";
                };
            };
            required: ("type" | "variance" | "elementId" | "formula" | "critical")[];
            additionalProperties: false;
        };
    };
    readonly additionalProperties: false;
};
export declare const SCHEMA_DATA_ITEM: {
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
        readonly effects: {
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
                    value1: {
                        type: "integer";
                    };
                    value2: {
                        type: "integer";
                    };
                };
                required: ("code" | "dataId" | "value1" | "value2")[];
                additionalProperties: false;
            };
        };
        readonly damage: {
            type: "object";
            properties: {
                type: {
                    type: "integer";
                };
                elementId: {
                    type: "integer";
                };
                formula: {
                    type: "string";
                };
                variance: {
                    type: "integer";
                };
                critical: {
                    type: "boolean";
                };
            };
            required: ("type" | "variance" | "elementId" | "formula" | "critical")[];
            additionalProperties: false;
        };
    };
};
