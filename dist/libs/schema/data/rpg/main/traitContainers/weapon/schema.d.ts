export declare const SCHEMA_DATA_WEAPON: {
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
            type: "array";
            items: [{
                type: "integer";
            }, {
                type: "integer";
            }, {
                type: "integer";
            }, {
                type: "integer";
            }, {
                type: "integer";
            }, {
                type: "integer";
            }, {
                type: "integer";
            }, {
                type: "integer";
            }];
            minItems: 8;
            maxItems: 8;
        };
        readonly damage: {
            type: "object";
            properties: {
                type: {
                    type: "integer";
                    minimum: number;
                };
                elementId: {
                    type: "integer";
                    minimum: number;
                };
                formula: {
                    type: "string";
                };
                variance: {
                    type: "integer";
                    minimum: number;
                    maximum: number;
                };
                critical: {
                    type: "boolean";
                    default: false;
                };
            };
            required: ("type" | "variance" | "elementId" | "formula" | "critical")[];
        };
        readonly traits: {
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
                    value: {
                        type: "integer";
                    };
                };
                required: ("code" | "dataId" | "value")[];
            };
        };
    };
};
