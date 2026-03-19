export declare const SCHEMA_DATA_ENEMY: {
    readonly type: "object";
    readonly required: readonly ["name", "id", "battlerName", "battlerHue", "exp", "gold", "note", "params", "dropItems", "traits", "actions"];
    readonly properties: {
        readonly name: {
            readonly type: "string";
        };
        readonly id: {
            readonly type: "integer";
        };
        readonly battlerHue: {
            readonly type: "integer";
        };
        readonly battlerName: {
            readonly type: "string";
        };
        readonly exp: {
            readonly type: "integer";
        };
        readonly gold: {
            readonly type: "integer";
        };
        readonly note: {
            readonly type: "string";
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
        readonly actions: {
            type: "array";
            items: {
                type: "object";
                required: ("conditionParam1" | "conditionParam2" | "conditionType" | "skillId" | "rating")[];
                properties: {
                    conditionParam1: {
                        type: "integer";
                    };
                    conditionParam2: {
                        type: "integer";
                    };
                    conditionType: {
                        type: "integer";
                    };
                    skillId: {
                        type: "integer";
                    };
                    rating: {
                        type: "integer";
                    };
                };
            };
        };
        readonly traits: {
            type: "array";
            items: {
                additionalProperties: false;
                type: "object";
                properties: {
                    code: {
                        type: "integer";
                    };
                    dataId: {
                        type: "integer";
                    };
                    value: {
                        type: "number";
                    };
                };
                required: ("code" | "value" | "dataId")[];
            };
        };
        readonly dropItems: {
            type: "array";
            items: {
                type: "object";
                properties: {
                    kind: {
                        type: "integer";
                    };
                    dataId: {
                        type: "integer";
                    };
                    denominator: {
                        type: "integer";
                    };
                    rate: {
                        type: string;
                    };
                };
                required: ("dataId" | "denominator" | "kind")[];
            };
        };
    };
};
