import type {
  ArrayParamBase,
  ParamBase,
} from "@RpgTypes/rmmz/plugin/schema/compile/kinds/core/paramBase";
import type { JSONSchemaType } from "ajv";

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
 * - ParamBaseの派生型からメタ情報を抽出しJSONSchema形式に変換。値が無効な場合はフィールドを生成しない。
 */
export const withTexts = (
  param: ParamBase
): {
  title?: string;
  description?: string;
} => ({
  ...(typeof param.text === "string" ? { title: param.text } : {}),
  ...(typeof param.desc === "string" ? { description: param.desc } : {}),
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
