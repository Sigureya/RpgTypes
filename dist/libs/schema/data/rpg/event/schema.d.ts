export declare const SCHEMA_DATA_TROOP: {
    type: string;
    required: string[];
    properties: {
        id: {
            type: string;
            minimum: number;
        };
        name: {
            type: string;
        };
        members: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly enemyId: {
                        readonly type: "integer";
                    };
                    readonly x: {
                        readonly type: "integer";
                    };
                    readonly y: {
                        readonly type: "integer";
                    };
                    readonly hidden: {
                        readonly type: "boolean";
                    };
                };
                readonly required: readonly ["enemyId", "x", "y"];
            };
        };
        pages: {
            type: string;
            items: {
                readonly type: "object";
                readonly properties: {
                    readonly conditions: {
                        readonly type: "object";
                        readonly properties: {
                            readonly switch1Valid: {
                                readonly type: "boolean";
                            };
                            readonly switch2Valid: {
                                readonly type: "boolean";
                            };
                            readonly variableValid: {
                                readonly type: "boolean";
                            };
                            readonly selfSwitchValid: {
                                readonly type: "boolean";
                            };
                            readonly actorValid: {
                                readonly type: "boolean";
                            };
                            readonly enemyValid: {
                                readonly type: "boolean";
                            };
                            readonly timerValid: {
                                readonly type: "boolean";
                            };
                        };
                    };
                    readonly span: {
                        readonly type: "string";
                    };
                };
            };
            required: string[];
        };
    };
};
