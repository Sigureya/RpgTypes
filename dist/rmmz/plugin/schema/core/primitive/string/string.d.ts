export declare const paramKindsString: () => ("string" | "file" | "multiline_string" | "combo")[];
export declare const rmmzSchemaStringParam: () => {
    additionalProperties: false;
    type: "object";
    required: ("type" | "default")[];
    properties: {
        type: {
            type: "string";
            enum: ("string" | "multiline_string")[];
        };
        default: {
            type: "string";
            default: string;
        };
    };
};
export declare const rmmzSchemaFilePathParam: () => {
    additionalProperties: false;
    type: "object";
    required: ("type" | "default" | "dir")[];
    properties: {
        type: {
            type: "string";
            const: "file";
        };
        default: {
            type: "string";
            default: string;
        };
        dir: {
            type: "string";
            default: string;
        };
    };
};
