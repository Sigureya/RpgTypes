import type { AnyParamSchema } from "./anyPluginSchema";
import type {
  BooleanParam,
  StructArrayRefParam,
  StructRefParam,
  StructParamPrimitive,
} from "./primitiveParams";

export interface PrimitiveStructBase {
  struct: string;
  params: Record<string, StructParamPrimitive>;
}

export type PrimitiveStructType<T extends object> = {
  struct: string;
  params: PrimitiveParams<T>;
};

export type PrimitiveParams<T extends object> = {
  [K in Extract<keyof T, string>]: PluginSchemaType<T[K]>;
};

export type PluginSchemaType<T> = T extends boolean
  ? BooleanParam
  : T extends number
  ? Extract<StructParamPrimitive, { default: number }>
  : T extends string
  ? Extract<StructParamPrimitive, { default: string }>
  : T extends number[]
  ? Extract<StructParamPrimitive, { default: number[] }>
  : T extends string[]
  ? Extract<StructParamPrimitive, { default: string[] }>
  : T extends null
  ? {
      kind: "null is Forbidden";
      default?: null;
    }
  : T extends undefined
  ? {
      kind: "undefined is Forbidden";
    }
  : T extends boolean[]
  ? { kind: "boolean[] is Forbidden" }
  : T extends object[]
  ? StructArrayRefParam
  : T extends object
  ? StructRefParam
  : never;

export const compileProperties = <T extends object>(
  struct: PrimitiveStructType<T>,
  fn: (value: StructParamPrimitive, key: string) => AnyParamSchema
) => {
  const entries = Object.entries(struct.params).map(([key, value]) => ({
    [key]: fn(value as StructParamPrimitive, key),
  }));
  return {
    title: struct.struct satisfies string,
    type: "object" as const,
    properties: entries.reduce<Record<string, AnyParamSchema>>(
      (acc, curr) => ({ ...acc, ...curr }),
      {}
    ),
    required: Object.keys(struct.params),
  };
};
