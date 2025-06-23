import type { JSONSchemaType } from "ajv";
import type { ArrayParamBase, ParamBase } from "./paramBase";

export const compileArrayField = <T, S extends JSONSchemaType<T>>(
  data: ArrayParamBase<T>,
  itemSchema: S
) =>
  ({
    type: "array",
    items: itemSchema,
    ...withTexts(data),
    ...withDefault(data.default),
  } satisfies JSONSchemaType<T[]>);

/**
 * - ParamBaseの派生型からメタ情報を抽出。値が無効な場合はフィールドを生成しない。
 */
export const withTexts = (
  kind: ParamBase
): {
  title?: string;
  description?: string;
} => ({
  ...(typeof kind.text === "string" ? { title: kind.text } : {}),
  ...(typeof kind.desc === "string" ? { description: kind.desc } : {}),
});

/**
 * - ParamBaseの派生型からdefault値を抽出。値が無効な場合はフィールドを生成しない。
 */
export const withDefault = <T>(
  value: T | undefined
):
  | {}
  | {
      default: T;
    } => (value !== undefined ? { default: value } : {});
