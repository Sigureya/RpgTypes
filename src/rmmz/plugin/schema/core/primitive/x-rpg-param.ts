import type { JSONSchemaType } from "ajv";
import type { SourceIdentifier } from "src/namedItemSource";

export const X_RPG_PARM = "x-rpg-param" as const;
export type ParamSchema<Value, X> = JSONSchemaType<Value> & {
  "x-rpg-param": X_RmmzParam<Required<X>>;
  description: string;
  title: string;
};

export interface X_RmmzParam<T, Kind extends string = string> {
  parent: string;
  kind: Kind;
  data: T;
}

export type X_Param_DataId = X_RmmzParam<SourceIdentifier, "dataId">;

export type NumberParamSchema = ParamSchema<number, { digit: number }> & {
  maximum: number;
  minimum: number;
};
