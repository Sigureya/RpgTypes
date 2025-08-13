export declare const SCHEMA_DATA_COMMON_EVENT: {
    readonly type: "object";
    readonly required: ("name" | "id" | "list" | "trigger" | "switchId")[];
    readonly properties: {
        readonly trigger: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly id: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly name: {
            readonly type: "string";
        };
        readonly list: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly required: readonly ["code", "indent", "parameters"];
                readonly properties: {
                    readonly code: {
                        readonly type: "integer";
                    };
                    readonly indent: {
                        readonly type: "integer";
                    };
                    readonly parameters: {
                        readonly type: "array";
                    };
                };
            };
        };
        readonly switchId: {
            readonly type: "integer";
            readonly minimum: 0;
        };
    };
};
