import type { SourceIdentifier } from "@RpgTypes/libs";
import type { X_ParamData, X_RmmzParam } from "./scala/base/x-rpg-param";
import type { NumberParam } from "../../rmmz/plugin/schema/compile/kinds/core/primitiveParams";

export type X_ParamDataId = X_RmmzParam<SourceIdentifier, "dataId">;
export type X_ParamNumber = X_ParamData<Omit<NumberParam, "min" | "max">>;
