import { EventCommandLike2 } from '../frame';
export type CommandUnion_TextBody = EventCommandLike2<108 | 408 | 355 | 655 | 401 | 405, // show scroll
[
    comment: string
]>;
export declare const SCHEMA_COMMAND_TEXT_BODY: {
    readonly type: "object";
    readonly required: readonly ["code", "parameters", "indent"];
    readonly properties: {
        readonly code: {
            readonly type: "integer";
            readonly enum: readonly [108, 408, 355, 401, 405, 655];
        };
        readonly indent: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly parameters: {
            readonly type: "array";
            readonly minItems: 1;
            readonly maxItems: 1;
            readonly items: readonly [{
                readonly type: "string";
            }];
        };
    };
    readonly additionalProperties: false;
};
