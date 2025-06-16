import type { JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
import type { SourceIdentifier } from "src/namedItemSource";

export const X_RPG_PARM = "x-rpg-param" as const;
export type ParamSchema<Value, X> = JSONSchemaType<Value> & {
  "x-rpg-param": X_RmmzParam<X>;
};

export interface X_RmmzParam<T, Kind extends string = string> {
  parent: string;
  kind: Kind;
  data: T;
}

export type X_Param_DataId = X_RmmzParam<SourceIdentifier, "dataId">;

export type NumberParamSchema = ParamSchema<number, { digit: number }> &
  Required<Pick<Schema, "maximum" | "minimum" | "description" | "title">>;
