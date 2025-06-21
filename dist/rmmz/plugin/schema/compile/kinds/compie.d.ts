import { JSONSchemaType } from 'ajv';
import { StructParamPrimitive } from './core/primitiveParams';
export type AnyParamSchema = {} | JSONSchemaType<number> | JSONSchemaType<string> | JSONSchemaType<boolean> | JSONSchemaType<number[]> | JSONSchemaType<string[]> | JSONSchemaType<object> | JSONSchemaType<object[]> | {
    $ref: string;
};
export declare const compilePrimitiveFiled: (data: StructParamPrimitive) => AnyParamSchema;
export declare const compilePrimitiveFiledWithXParam: (data: StructParamPrimitive) => AnyParamSchema;
