import type { JSONSchemaType } from "ajv";
import type { SourceIdentifier } from "src/namedItemSource";
import type { X_MetaParamCore_Boolean } from "./boolean";
import type { X_MetaParamCore_Number } from "./numbers";

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

export type X_Param_DataId = X_RmmzParam<SourceIdentifier, "dataId">;
export type X_Param_Number = X_RmmzParam<X_MetaParamCore_Number, "number">;
export type X_Param_Boolean = X_RmmzParam<X_MetaParamCore_Boolean, "boolean">;
export type X_Param_String = X_RmmzParam<{}, "string" | "multiline_string">;

export type NumberParamSchema = ParamSchemaCompiled<
  number,
  X_MetaParamCore_Number
> & {
  maximum: number;
  minimum: number;
};
