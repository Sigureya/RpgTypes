import type { JSONSchemaType } from "ajv";
import type { KindBase, KindOfStructRef } from "./primitiveParams";

export const withTexts = (kind: KindBase) => ({
  ...(typeof kind.text === "string" ? { title: kind.text } : {}),
  ...(typeof kind.desc === "string" ? { description: kind.desc } : {}),
});

export const withDefault = <T>(value: T | undefined) =>
  value !== undefined ? { default: value } : {};

export const makeArrayField = <T>(data: KindOfArray<T>, itemType: string) =>
  ({
    type: "array",
    items: { type: itemType },
    ...withDefault(data.default),
  } as JSONSchemaType<T[]>);
interface KindOfArray<T> {
  kind: `${string}[]`;
  default?: T[];
}

export const makeStructRef = (ref: KindOfStructRef) => ({
  $ref: `#/definitions/${ref.struct}`,
  ...withTexts(ref),
});
