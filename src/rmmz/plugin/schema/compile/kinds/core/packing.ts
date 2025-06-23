import type { JSONSchemaType } from "ajv";
import { compilePrimitiveFiled } from "../compieFiled";
import type {
  PrimitiveStructBase,
  PrimitiveStructType,
} from "./pluginScehamType";
import type { StructParamPrimitive } from "./primitiveParams";

type StructPackage = {
  structs: Record<string, PrimitiveStructType<object>>;
};

export type TypePackage<T extends Record<string, object>> = {
  [K in keyof T]: PrimitiveStructType<T[K]>;
};

export const compileFromStructPackage = <T extends StructPackage>(
  plugin: T
) => {
  return Object.entries(plugin.structs).reduce((acc, [key, struct]) => {
    return {
      ...acc,
      [key]: compilePrimitiveStruct(struct),
    };
  }, {});
};

export const compileFromStructArray = (
  list: PrimitiveStructBase[]
): Record<string, JSONSchemaType<object>> => {
  return list.reduce((acc, struct3) => {
    return {
      ...acc,
      [struct3.struct]: compilePrimitiveStruct(struct3),
    };
  }, {});
};

export const compilePrimitiveStruct = (struct: PrimitiveStructBase) => {
  return {
    $id: `#/definitions/${struct.struct}`,
    type: "object" as const,
    //  title: struct.struct,
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
