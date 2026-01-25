export declare const SCHEMA_MAP_EVENT_PAGE_CONDITION: {
    readonly type: "object";
    readonly additionalProperties: false;
    readonly required: readonly ["switch1Id", "switch1Valid", "switch2Id", "switch2Valid", "variableId", "variableValid", "selfSwitchCh", "selfSwitchValid", "variableValue", "itemId", "itemValid", "actorId", "actorValid"];
    readonly properties: {
        readonly switch1Id: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly switch1Valid: {
            readonly type: "boolean";
        };
        readonly switch2Id: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly switch2Valid: {
            readonly type: "boolean";
        };
        readonly variableId: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly variableValid: {
            readonly type: "boolean";
        };
        readonly selfSwitchCh: {
            readonly type: "string";
        };
        readonly selfSwitchValid: {
            readonly type: "boolean";
        };
        readonly variableValue: {
            readonly type: "integer";
        };
        readonly itemId: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly itemValid: {
            readonly type: "boolean";
        };
        readonly actorId: {
            readonly type: "integer";
        };
        readonly actorValid: {
            readonly type: "boolean";
        };
    };
};
