import type { JSONSchemaType } from "ajv";
import type { StructParamPrimitive } from "./kinds";
import type { PrimitiveStructType } from "./pluginScehamType";
import { compileStruct2 } from "./pluginScehamType";

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
      [key]: compileStruct2(struct),
    };
  }, {});
};

export interface Struct3 {
  struct: string;
  params: Record<string, StructParamPrimitive>;
}

export const compileFromStrucArray = (
  list: Struct3[]
): Record<string, JSONSchemaType<object>> => {
  return list.reduce((acc, struct3) => {
    return {
      ...acc,
      [struct3.struct]: compileStruct2(struct3),
    };
  }, {});
};
