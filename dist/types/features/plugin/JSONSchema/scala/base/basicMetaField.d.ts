import { ArrayParamBase, ParamBase } from '../../../../../rmmz/plugin/core/paramBase';
import { JSONSchemaType } from 'ajv';
export declare const compileArrayField: <T, S extends JSONSchemaType<T>>(data: ArrayParamBase<T>, itemSchema: S) => {
    default?: T[] | undefined;
    title?: string;
    description?: string;
    type: "array";
    items: S;
};
/**
 * - ParamBaseの派生型からメタ情報を抽出しJSONSchema形式に変換。値が無効な場合はフィールドを生成しない。
 */
export declare const withTexts: (param: ParamBase) => {
    title?: string;
    description?: string;
};
/**
 * - ParamBaseの派生型からdefault値を抽出。値が無効な場合はフィールドを生成しない。
 */
export declare const withDefault: <T>(value: T | undefined) => {} | {
    default: T;
};
