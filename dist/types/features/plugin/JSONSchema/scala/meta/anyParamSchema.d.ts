import { JSONSchemaType } from 'ajv';
export type AnyParamSchema = {} | JSONSchemaType<number> | JSONSchemaType<string> | JSONSchemaType<boolean> | JSONSchemaType<number[]> | JSONSchemaType<string[]> | JSONSchemaType<object> | JSONSchemaType<object[]> | {
    $ref: string;
};
