import { PrimitiveParam } from './core/primitiveParams';
import { AnyParamSchema } from './pluginMeta/anyParamSchema';
export interface PrimitiveStructSchema<T extends object> {
    type: "object";
    properties: Record<keyof T, AnyParamSchema>;
    required: (keyof T)[];
    additionalProperties: false;
}
export declare const compileFlatStruct: <T extends object>(params: Record<keyof T, PrimitiveParam>) => PrimitiveStructSchema<T>;
