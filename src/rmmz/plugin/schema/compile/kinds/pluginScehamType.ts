import type { JSONSchemaType } from "ajv";
import { compilePrimitiveFiled } from "./compie";
import type {
  KindOfBoolean,
  KindOfStructArrayRef,
  KindOfStructRef,
  StructParamPrimitive,
} from "./core/primitiveParams";

export type PrimitiveStruct<T extends object> = {
  struct: string;
  params: PrimitiveParams<T>;
};

export type PrimitiveParams<T extends object> = {
  [K in Extract<keyof T, string>]: PluginSchemaType<T[K]>;
};

export type PluginSchemaType<T> = T extends boolean
  ? KindOfBoolean
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
  ? KindOfStructArrayRef
  : T extends object
  ? KindOfStructRef
  : never;
// const fn = <T>(data: T): PluginSchemaType<T> => {};
export type AnyParamSchema =
  | {}
  | JSONSchemaType<number>
  | JSONSchemaType<string>
  | JSONSchemaType<boolean>
  | JSONSchemaType<number[]>
  | JSONSchemaType<string[]>
  | JSONSchemaType<object>
  | JSONSchemaType<object[]>
  | { $ref: string };

export const compileProperties = <T extends object>(
  struct: PrimitiveStruct<T>,
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

interface Struct3<K extends string = string> {
  struct: string;
  params: Record<K, StructParamPrimitive>;
}
export const compileStruct3 = (
  list: Struct3[]
): Record<string, JSONSchemaType<object>> => {
  return list.reduce((acc, s) => {
    const p = compileStruct2(s);
    return {
      ...acc,
      [s.struct]: p,
    };
  }, {});
};

export const compileStruct2 = <K extends string>(struct: Struct3<K>) => {
  return {
    type: "object" as const,
    title: struct.struct,
    properties: compileParams(struct.params, compilePrimitiveFiled),
    required: Object.keys(struct.params),
  };
};

export const compileParams = <
  K extends string,
  P extends StructParamPrimitive,
  R
>(
  params: Record<K, P>,
  fn: (value: P, key: string) => R
): Record<K, R> => {
  const entries = Object.entries<P>(params).map(([key, value]) => ({
    [key]: fn(value, key),
  }));
  return entries.reduce<Record<K, R>>(
    (acc, curr) => ({ ...acc, ...curr }),
    {} as Record<K, R>
  );
};
