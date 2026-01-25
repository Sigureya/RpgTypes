export declare const SCHEMA_MOVEROUTE_DATA: {
    readonly type: "object";
    readonly additionalProperties: false;
    readonly required: readonly ["wait", "repeat", "skippable", "list"];
    readonly properties: {
        readonly wait: {
            readonly type: "boolean";
        };
        readonly repeat: {
            readonly type: "boolean";
        };
        readonly skippable: {
            readonly type: "boolean";
        };
        readonly list: {
            readonly type: "array";
            readonly items: {
                readonly additionalProperties: false;
                readonly type: "object";
                readonly required: readonly ["code", "parameters"];
                readonly properties: {
                    readonly code: {
                        readonly type: "integer";
                    };
                    readonly parameters: {
                        readonly type: "array";
                        readonly items: {
                            readonly oneOf: readonly [{
                                readonly type: "string";
                            }, {
                                readonly type: "number";
                            }, {
                                type: "object";
                                additionalProperties: false;
                                required: ("name" | "volume" | "pitch" | "pan")[];
                                properties: {
                                    name: {
                                        type: "string";
                                    };
                                    pan: {
                                        type: "integer";
                                    };
                                    pitch: {
                                        type: "integer";
                                    };
                                    volume: {
                                        type: "integer";
                                    };
                                };
                            }];
                        };
                    };
                };
            };
        };
    };
};
