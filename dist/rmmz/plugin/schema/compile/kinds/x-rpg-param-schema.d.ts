import { SourceIdentifier } from '../../../../../libs/namedItemSource';
import { X_ParamData, X_RmmzParam } from './core/paramBase/x-rpg-param';
import { NumberParam } from './core/primitiveParams';
export type X_ParamDataId = X_RmmzParam<SourceIdentifier, "dataId">;
export type X_ParamNumber = X_ParamData<Omit<NumberParam, "min" | "max">>;
export declare const makeRpgParamMetaSchema: () => {
    readonly type: "object";
    readonly discriminator: {
        readonly propertyName: "kind";
    };
    readonly oneOf: [{
        readonly type: "object";
        readonly required: readonly ["kind"];
        readonly additionalProperties: false;
        readonly properties: {
            readonly kind: {
                readonly type: "string";
                readonly enum: readonly ["string", "multiline_string"];
            };
            readonly parent: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly data: {
                readonly type: "object";
                readonly properties: {};
            };
        };
    }, {
        type: "object";
        required: ("kind" | "data")[];
        additionalProperties: false;
        properties: {
            kind: {
                type: "string";
                const: "number";
            };
            parent: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            data: {
                type: "object";
                properties: {
                    decimals: {
                        type: "number";
                        nullable: true;
                        minimum: number;
                        default: number;
                    };
                };
            };
        };
    }, {
        readonly type: "object";
        readonly required: readonly ["kind", "data"];
        readonly additionalProperties: false;
        readonly properties: {
            readonly kind: {
                readonly type: "string";
                readonly const: "dataId";
            };
            readonly parent: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly data: {
                additionalProperties: false;
                type: "object";
                required: ("author" | "module" | "kind")[];
                properties: {
                    author: {
                        readonly type: "string";
                        readonly maxLength: 100;
                    };
                    module: {
                        readonly type: "string";
                        readonly maxLength: 100;
                    };
                    kind: {
                        readonly type: "string";
                        readonly maxLength: 100;
                    };
                };
            };
        };
    }, {
        readonly type: "object";
        readonly required: readonly ["kind", "data"];
        readonly additionalProperties: false;
        readonly properties: {
            readonly kind: {
                readonly type: "string";
                readonly const: "select";
            };
            readonly parent: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly data: {
                readonly type: "object";
                readonly required: readonly ["options"];
                readonly properties: {
                    readonly options: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly value: {
                                    readonly type: "string";
                                    readonly maxLength: 100;
                                };
                                readonly option: {
                                    readonly type: "string";
                                    readonly maxLength: 100;
                                };
                            };
                            readonly required: readonly ["value", "option"];
                            readonly additionalProperties: false;
                        };
                    };
                };
            };
        };
    }, {
        readonly type: "object";
        readonly required: readonly ["kind", "data"];
        readonly additionalProperties: false;
        readonly properties: {
            readonly kind: {
                readonly type: "string";
                readonly const: "boolean";
            };
            readonly parent: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly data: {
                readonly type: "object";
                readonly properties: {
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
                };
            };
        };
    }, {
        readonly type: "object";
        readonly required: readonly ["kind", "data"];
        readonly additionalProperties: false;
        readonly properties: {
            readonly kind: {
                readonly type: "string";
                readonly const: "combo";
            };
            readonly parent: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
            };
            readonly data: {
                readonly type: "object";
                readonly required: readonly ["options"];
                readonly properties: {
                    readonly options: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                    };
                };
            };
        };
    }];
};
