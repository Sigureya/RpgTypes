export declare const makePluginParamSchema: () => {
    readonly type: "object";
    readonly discriminator: {
        readonly propertyName: "kind";
    };
    readonly oneOf: [{
        readonly additionalProperties: false;
        readonly type: "object";
        readonly required: readonly ["kind", "default"];
        readonly properties: {
            readonly kind: {
                readonly type: "string";
                readonly const: "boolean";
            };
            readonly default: {
                readonly type: "boolean";
                readonly default: true;
            };
            readonly on: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly off: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly desc: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly text: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly parent: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
        };
    }, {
        readonly additionalProperties: false;
        readonly type: "object";
        readonly required: readonly ["kind", "default", "options"];
        readonly properties: {
            readonly kind: {
                readonly type: "string";
                readonly const: "combo";
            };
            readonly default: {
                readonly type: "string";
                readonly default: "";
                readonly nullable: false;
            };
            readonly options: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
                readonly default: [];
            };
            readonly desc: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly text: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly parent: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
        };
    }, {
        readonly additionalProperties: false;
        readonly type: "object";
        readonly required: readonly ["kind", "default"];
        readonly properties: {
            readonly kind: {
                readonly type: "string";
                readonly enum: readonly ["actor", "class", "skill", "item", "weapon", "armor", "enemy", "state", "common_event"];
            };
            readonly default: {
                readonly type: "integer";
                readonly default: 0;
            };
            readonly desc: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly text: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly parent: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
        };
    }, {
        readonly additionalProperties: false;
        readonly type: "object";
        readonly required: readonly ["kind", "default", "dir"];
        readonly properties: {
            readonly kind: {
                readonly type: "string";
                readonly const: "file";
            };
            readonly default: {
                readonly type: "string";
                readonly default: "";
                readonly nullable: false;
            };
            readonly dir: {
                readonly type: "string";
                readonly default: "";
                readonly nullable: false;
            };
            readonly desc: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly text: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly parent: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
        };
    }, {
        readonly additionalProperties: false;
        readonly type: "object";
        readonly required: readonly ["kind", "default", "dir"];
        readonly properties: {
            readonly kind: {
                readonly type: "string";
                readonly const: "file[]";
            };
            readonly default: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
                readonly default: [];
            };
            readonly dir: {
                readonly type: "string";
                readonly default: "";
                readonly nullable: false;
            };
            readonly desc: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly text: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly parent: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
        };
    }, {
        readonly type: "object";
        readonly required: readonly ["kind", "default"];
        readonly properties: {
            readonly decimals: {
                readonly type: "integer";
                readonly minimum: 0;
                readonly default: 0;
                readonly nullable: true;
            };
            readonly min: {
                readonly type: "number";
                readonly nullable: true;
            };
            readonly max: {
                readonly type: "number";
                readonly nullable: true;
            };
            readonly default: {
                readonly type: "number";
                readonly default: 0;
            };
            readonly kind: {
                readonly type: "string";
                readonly const: "number";
            };
            readonly desc: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly text: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly parent: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
        };
    }, {
        readonly additionalProperties: false;
        readonly type: "object";
        readonly required: readonly ["kind", "default"];
        readonly properties: {
            readonly kind: {
                readonly type: "string";
                readonly const: "number[]";
            };
            readonly default: {
                readonly type: "array";
                readonly items: {
                    readonly type: "number";
                    readonly default: 0;
                };
                readonly default: [];
            };
            readonly decimals: {
                readonly type: "integer";
                readonly minimum: 0;
                readonly default: 0;
                readonly nullable: true;
            };
            readonly min: {
                readonly type: "number";
                readonly nullable: true;
            };
            readonly max: {
                readonly type: "number";
                readonly nullable: true;
            };
            readonly desc: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly text: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly parent: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
        };
    }, {
        readonly additionalProperties: false;
        readonly type: "object";
        readonly required: readonly ["kind", "default", "options"];
        readonly properties: {
            readonly kind: {
                readonly type: "string";
                readonly const: "select";
            };
            readonly default: {
                readonly type: "string";
                readonly default: "";
                readonly nullable: false;
            };
            readonly options: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly value: {
                            readonly type: "string";
                            readonly default: "";
                            readonly nullable: false;
                        };
                        readonly option: {
                            readonly type: "string";
                            readonly default: "";
                            readonly nullable: false;
                        };
                    };
                    readonly required: readonly ["value", "option"];
                };
                readonly default: [];
            };
            readonly desc: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly text: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly parent: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
        };
    }, {
        readonly additionalProperties: false;
        readonly type: "object";
        readonly required: readonly ["kind", "struct"];
        readonly properties: {
            readonly kind: {
                readonly type: "string";
                readonly const: "struct";
            };
            readonly default: {
                readonly type: "object";
                readonly default: {};
                readonly nullable: true;
            };
            readonly desc: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly text: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly parent: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly struct: {
                readonly type: "string";
                readonly pattern: "^[a-zA-Z][a-zA-Z0-9]*$";
                readonly minLength: 1;
                readonly maxLength: 48;
            };
        };
    }, {
        readonly additionalProperties: false;
        readonly type: "object";
        readonly required: readonly ["kind", "struct"];
        readonly properties: {
            readonly kind: {
                readonly type: "string";
                readonly const: "struct[]";
            };
            readonly struct: {
                readonly type: "string";
                readonly pattern: "^[a-zA-Z][a-zA-Z0-9]*$";
                readonly minLength: 1;
                readonly maxLength: 48;
            };
            readonly default: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                };
                readonly default: [];
                readonly nullable: true;
            };
            readonly desc: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly text: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly parent: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
        };
    }, {
        readonly additionalProperties: false;
        readonly type: "object";
        readonly required: readonly ["kind", "default"];
        readonly properties: {
            readonly kind: {
                readonly type: "string";
                readonly const: "string";
            };
            readonly default: {
                readonly type: "string";
                readonly default: "";
                readonly nullable: false;
            };
            readonly desc: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly text: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly parent: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
        };
    }, {
        readonly additionalProperties: false;
        readonly type: "object";
        readonly required: readonly ["kind", "default"];
        readonly properties: {
            readonly kind: {
                readonly type: "string";
                readonly const: "string[]";
            };
            readonly default: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                    readonly default: "";
                    readonly nullable: false;
                };
                readonly default: [];
            };
            readonly desc: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly text: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly parent: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
        };
    }];
};
