import type { SourceIdentifier } from "@RpgTypes/libs";
import type { X_ParamData, X_RmmzParam } from "./paramBase/x-rpg-param";
import type { NumberParam } from "./primitiveParams";

export type X_ParamDataId = X_RmmzParam<SourceIdentifier, "dataId">;
export type X_ParamNumber = X_ParamData<Omit<NumberParam, "min" | "max">>;
