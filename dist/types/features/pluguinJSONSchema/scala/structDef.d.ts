import { StructRefParam } from '../../../rmmz/plugin/schema/compile';
export interface JSONSchemaStructRef {
    $ref: string;
    description?: string;
    title?: string;
}
export declare const makeStructRef: (ref: StructRefParam) => JSONSchemaStructRef;
export declare const makeStructRefWithXParam: (ref: StructRefParam) => {
    "x-rpg-param": {
        data: {
            struct: string;
        };
        parent?: string | undefined;
        kind: string;
    };
    title?: string;
    description?: string;
    $ref: string;
};
