import { JSONSchemaType } from 'ajv';
import { KindBase } from './primitiveParams';
export interface KindOfArray<T> extends KindBase {
    kind: `${string}[]`;
    default?: T[];
}
export declare const compileArrayField: <T, S extends JSONSchemaType<T>>(data: KindOfArray<T>, itemSchema: S) => {
    default: T[];
    description?: string | undefined;
    title?: string | undefined;
    type: "array";
    items: S;
} | {
    default?: undefined;
    description?: string | undefined;
    title?: string | undefined;
    type: "array";
    items: S;
};
export declare const withTexts: (kind: KindBase) => {
    description?: string | undefined;
    title?: string | undefined;
};
export declare const withDefault: <T>(value: T | undefined) => {
    default: T & ({} | null);
} | {
    default?: undefined;
};
