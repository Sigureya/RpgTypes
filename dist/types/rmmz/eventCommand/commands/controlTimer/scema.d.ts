declare const SCHEMA_COMMAND_CONTROL_TIMER: {
    required: ("parameters" | "code" | "indent")[];
    type: "object";
    properties: {
        code: {
            type: "number";
            const: 124;
        };
        indent: {
            type: "integer";
            minimum: number;
        };
        parameters: {
            type: "array";
            minItems: 2;
            maxItems: 2;
            items: [{
                type: "number";
                enum: (0 | 1)[];
            }, {
                type: "number";
                minimum: number;
            }];
        };
    };
};
export default SCHEMA_COMMAND_CONTROL_TIMER;
