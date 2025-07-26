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
export default SCHEMA_DATA_ARMMOR;
