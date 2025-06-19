import { JSONSchemaType } from 'ajv';
interface NullableString {
    type: "string";
    nullable: true;
    maxLength: 100;
}
export declare const makeSchema3: () => {
    type: "object";
    discriminator: {
        propertyName: "kind";
    };
    oneOf: ({
        type: "object";
        required: ("kind" | "data")[];
        additionalProperties: false;
        properties: {
            kind: {
                type: "string";
                const: "boolean";
            };
            parent: {
                readonly type: "string";
                readonly nullable: true;
                readonly maxLength: 100;
                readonly default: "";
            };
            data: {
                type: "object";
                properties: {
                    on: NullableString;
                    off: NullableString;
                };
            };
        };
    } | {
        type: "object";
        required: "kind"[];
        additionalProperties: false;
        properties: {
            kind: {
                type: "string";
                enum: ("string" | "multiline_string")[];
            };
            parent: NullableString;
        };
    } | {
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
                readonly default: "";
            };
            data: {
                type: "object";
                properties: {
                    digit: {
                        type: "number";
                        nullable: true;
                        minimum: number;
                        default: number;
                    };
                };
            };
        };
    } | {
        type: "object";
        required: ("kind" | "data")[];
        additionalProperties: false;
        properties: {
            kind: {
                type: "string";
                const: "dataId";
            };
            parent: {
                type: "string";
                maxLength: number;
                default: string;
            };
            data: {
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
    } | {
        type: "object";
        required: ("kind" | "data")[];
        additionalProperties: false;
        properties: {
            kind: {
                type: "string";
                const: "select";
            };
            parent: {
                type: "string";
                nullable: true;
                maxLength: number;
            };
            data: {
                type: "object";
                required: "options"[];
                properties: {
                    options: JSONSchemaType<import('./select').RmmzParamCore_Option[]>;
                };
            };
        };
    })[];
};
export {};
