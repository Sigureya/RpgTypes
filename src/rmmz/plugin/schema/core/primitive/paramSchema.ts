import type { JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
import type { RmmzParamTextFields } from "./metaTextField";

export type ParamSchema<Value extends number | boolean | string, X> = Schema &
  JSONSchemaType<Value> & {
    "x-rpg-param": X;
  };

interface X_RmmzParam<T> {
  parent?: string;
  kind: string;
  data: T;
}

export const rmmzParamToSchema = <
  V extends number | boolean | string,
  P extends RmmzParamTextFields & { default: V; type: string },
  X
>(
  param: P,
  fn: (p: P) => X
) => ({
  type: typeof param.default,
  default: param.default,
  title: param.text,
  description: param.desc,
  "x-rpg-param": {
    parent: param.parent,
    kind: param.type,
    data: fn(param),
  } satisfies X_RmmzParam<X>,
});
