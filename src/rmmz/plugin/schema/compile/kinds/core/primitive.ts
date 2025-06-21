import type { JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
import type { KindBase } from "./primitiveParams";

interface KindOfArray<T> {
  kind: `${string}[]`;
  default?: T[];
}

export const compileArrayField = <T, S extends JSONSchemaType<T> & Schema>(
  data: KindOfArray<T>,
  itemSchema: S
) =>
  ({
    type: "array",
    items: itemSchema,
    ...withTexts(data),
    ...withDefault(data.default),
  } satisfies JSONSchemaType<T[]>);

export const withTexts = (kind: KindBase) => ({
  ...(typeof kind.text === "string" ? { title: kind.text } : {}),
  ...(typeof kind.desc === "string" ? { description: kind.desc } : {}),
});

export const withDefault = <T>(value: T | undefined) =>
  value !== undefined ? { default: value } : {};
