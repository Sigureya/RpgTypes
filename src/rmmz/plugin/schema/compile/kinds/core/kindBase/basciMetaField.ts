import type { JSONSchemaType } from "ajv";
import type { ParamBase } from "./kindBase";

export interface KindOfArray<T> extends ParamBase {
  kind: `${string}[]`;
  default?: T[];
}

export const compileArrayField = <T, S extends JSONSchemaType<T>>(
  data: KindOfArray<T>,
  itemSchema: S
) =>
  ({
    type: "array",
    items: itemSchema,
    ...withTexts(data),
    ...withDefault(data.default),
  } satisfies JSONSchemaType<T[]>);

export const withTexts = (
  kind: ParamBase
): {
  title?: string;
  description?: string;
} => ({
  ...(typeof kind.text === "string" ? { title: kind.text } : {}),
  ...(typeof kind.desc === "string" ? { description: kind.desc } : {}),
});

export const withDefault = <T>(
  value: T | undefined
):
  | {}
  | {
      default: T;
    } => (value !== undefined ? { default: value } : {});
