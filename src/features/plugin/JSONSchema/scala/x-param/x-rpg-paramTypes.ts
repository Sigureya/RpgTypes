import type { SourceIdentifier } from "@RpgTypes/libs";
import type { NumberParam } from "@RpgTypes/rmmz/plugin/schema/compile";
import type { X_ParamData, X_RmmzParam } from "./base/x-rpg-param";

export type X_ParamDataId = X_RmmzParam<SourceIdentifier, "dataId">;
export type X_ParamNumber = X_ParamData<Omit<NumberParam, "min" | "max">>;
