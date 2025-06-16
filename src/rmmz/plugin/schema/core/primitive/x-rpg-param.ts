import type { JSONSchemaType } from "ajv";

export const X_RPG_PARM = "x-rpg-param" as const;
export interface X_RmmzParam<T> {
  parent?: string | null;
  kind: string;
  data: T;
}
export type ParamSchema<Value, X> = JSONSchemaType<Value> & {
  "x-rpg-param": X_RmmzParam<X>;
};
