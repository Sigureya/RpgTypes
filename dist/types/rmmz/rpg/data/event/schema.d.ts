declare const SCHEMA_DATA_TROOP: {
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
                        required: ("actorId" | "actorHp" | "enemyValid" | "switchValid")[];
                        properties: {
                            actorHp: {
                                type: "integer";
                                minimum: number;
                            };
                            actorId: {
                                type: "integer";
                                minimum: number;
                            };
                            enemyValid: {
                                type: "integer";
                                minimum: number;
                            };
                            switchValid: {
                                type: "integer";
                                minimum: number;
                            };
                        };
                    };
                    span: {
                        type: "number";
                    };
                    list: {
                        type: string;
                        items: {
                            type: string;
                            additionalProperties: boolean;
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
export default SCHEMA_DATA_TROOP;
