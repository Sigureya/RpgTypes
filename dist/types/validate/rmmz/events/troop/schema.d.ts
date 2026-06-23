export declare const SCHEMA_DATA_TROOP: {
    readonly type: "object";
    readonly required: ("id" | "name" | "pages" | "members")[];
    readonly properties: {
        readonly id: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly name: {
            readonly type: "string";
        };
        readonly members: {
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
                readonly required: readonly ["enemyId", "x", "y", "hidden"];
            };
        };
        readonly pages: {
            readonly type: "array";
            readonly items: {
                type: "object";
                additionalProperties: true;
                required: ("conditions" | "span")[];
                properties: {
                    conditions: {
                        type: "object";
                        required: ("actorId" | "switchId" | "turnEnding" | "turnValid" | "turnA" | "turnB" | "enemyValid" | "enemyIndex" | "enemyHp" | "actorValid" | "actorHp" | "switchValid")[];
                        properties: {
                            actorValid: {
                                type: "boolean";
                            };
                            actorHp: {
                                type: "integer";
                                minimum: number;
                            };
                            actorId: {
                                type: "integer";
                                minimum: number;
                            };
                            enemyValid: {
                                type: "boolean";
                            };
                            enemyIndex: {
                                type: "integer";
                                minimum: number;
                            };
                            enemyHp: {
                                type: "integer";
                                minimum: number;
                            };
                            switchValid: {
                                type: "boolean";
                            };
                            switchId: {
                                type: "integer";
                                minimum: number;
                            };
                            turnEnding: {
                                type: "boolean";
                            };
                            turnValid: {
                                type: "boolean";
                            };
                            turnA: {
                                type: "integer";
                            };
                            turnB: {
                                type: "integer";
                            };
                        };
                    };
                    span: {
                        type: "integer";
                        minimum: number;
                    };
                    list: {
                        type: string;
                        items: {
                            type: string;
                            required: ("code" | "indent" | "parameters")[];
                            properties: {
                                code: {
                                    type: string;
                                };
                                indent: {
                                    type: string;
                                };
                                parameters: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
