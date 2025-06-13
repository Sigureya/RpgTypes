export declare const SCHEMA_DATA_ARMMOR: {
    readonly type: "object";
    readonly required: readonly ["name", "id", "description", "iconIndex", "price", "params", "traits", "note", "etypeId", "atypeId"];
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
        readonly atypeId: {
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
                required: ("value" | "code" | "dataId")[];
            };
        };
    };
};
