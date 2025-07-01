import { compilePrimitiveField } from "./compileField";
import type { PrimitiveParam } from "./core/primitiveParams";
import type { AnyParamSchema } from "./pluginMeta/anyParamSchema";

export interface PrimitiveStructSchema<T extends object> {
  type: "object";
  properties: Record<keyof T, AnyParamSchema>;
  required: (keyof T)[];
  additionalProperties: false;
}

export const compileFlatStruct = <T extends object>(
  params: Record<keyof T, PrimitiveParam>
): PrimitiveStructSchema<T> => {
  const properties = Object.entries<PrimitiveParam>(params).reduce(
    (acc, [key, value]) => {
      const field: AnyParamSchema = compilePrimitiveField(value);
      return {
        ...acc,
        [key]: field,
      };
    },
    {}
  ) as Record<keyof T, AnyParamSchema>;
  return {
    type: "object",
    properties,
    required: Object.keys(properties) as (keyof T)[],
    additionalProperties: false,
  };
};
