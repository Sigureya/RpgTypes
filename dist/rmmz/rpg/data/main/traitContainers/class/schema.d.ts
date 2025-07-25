declare const SCHEMA_DATA_CLASS: {
    type: "object";
    required: ("name" | "id" | "note" | "params" | "traits" | "expParams" | "learnings")[];
    properties: {
        name: {
            type: "string";
        };
        id: {
            type: "integer";
            minimum: number;
        };
        note: {
            type: "string";
        };
        expParams: {
            type: "array";
            items: {
                type: "integer";
            };
        };
        params: {
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
        learnings: {
            type: "array";
            items: {
                type: "object";
                properties: {
                    level: {
                        type: "integer";
                    };
                    skillId: {
                        type: "integer";
                    };
                    note: {
                        type: "string";
                    };
                };
                required: ("level" | "skillId")[];
                additionalProperties: false;
            };
        };
        traits: {
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
                additionalProperties: false;
            };
        };
    };
    additionalProperties: false;
};
export default SCHEMA_DATA_CLASS;
