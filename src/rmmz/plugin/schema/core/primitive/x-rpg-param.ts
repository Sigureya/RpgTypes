import type { SourceIdentifier } from "src/namedItemSource";
import type { X_MetaParamCore_Boolean } from "./boolean";
import type { X_MetaParamCore_Number } from "./numbers";
import type {
  X_RmmzParam,
  X_RmmzParamInput,
  ParamSchemaCompiled,
} from "./x-rpg-param2/types";

export type X_ParamInput_Union =
  | X_Param_BooleanInput
  | X_Param_NumberInput
  | X_Param_DataIdInput;

export type X_Param_DataId = X_RmmzParam<SourceIdentifier, "dataId">;
export type X_Param_DataIdInput = X_RmmzParamInput<SourceIdentifier, "dataId">;

export type X_Param_Number = X_RmmzParam<X_MetaParamCore_Number, "number">;
export type X_Param_NumberInput = X_RmmzParamInput<
  X_MetaParamCore_Number,
  "number"
>;

export type X_Param_Boolean = X_RmmzParam<X_MetaParamCore_Boolean, "boolean">;
export type X_Param_BooleanInput = X_RmmzParamInput<
  X_MetaParamCore_Boolean,
  "boolean"
>;
export type X_Param_String = X_RmmzParam<{}, "string" | "multiline_string">;

export type NumberParamSchema = ParamSchemaCompiled<
  number,
  X_MetaParamCore_Number
> & {
  maximum: number;
  minimum: number;
};
