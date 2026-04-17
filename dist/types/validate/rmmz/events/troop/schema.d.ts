export declare const SCHEMA_DATA_TROOP: {
    readonly type: "object";
    readonly required: ("name" | "id" | "members" | "pages")[];
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
                readonly required: readonly ["enemyId", "x", "y", "hidden"];
                readonly properties: {
                    readonly enemyId: {
                        readonly type: "integer";
                        readonly minimum: 0;
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
            };
        };
        readonly pages: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly required: readonly ["conditions", "list", "span"];
                readonly properties: {
                    readonly conditions: {
                        readonly type: "object";
                        readonly required: readonly ["actorHp", "actorId", "enemyValid", "switchValid"];
                        readonly properties: {
                            readonly actorHp: {
                                readonly type: "integer";
                                readonly minimum: 0;
                            };
                            readonly actorId: {
                                readonly type: "integer";
                                readonly minimum: 0;
                            };
                            readonly enemyValid: {
                                readonly type: "integer";
                                readonly minimum: 0;
                            };
                            readonly switchValid: {
                                readonly type: "integer";
                                readonly minimum: 0;
                            };
                        };
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
                    readonly span: {
                        readonly type: "integer";
                        readonly minimum: 0;
                    };
                };
            };
        };
    };
};
