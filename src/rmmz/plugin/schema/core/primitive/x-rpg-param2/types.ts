import type { JSONSchemaType } from "ajv";

export const X_RPG_PARM = "x-rpg-param" as const;
export type ParamSchemaCompiled<Value, X> = JSONSchemaType<Value> & {
  "x-rpg-param": X_RmmzParam<Required<X>>;
  description: string;
  title: string;
};

export interface X_RmmzParamInput<T, Kind extends string = string> {
  parent?: string | null;
  kind: Kind;
  data: T;
}

export interface X_RmmzParam<T, Kind extends string = string> {
  parent: string;
  kind: Kind;
  data: T;
}
