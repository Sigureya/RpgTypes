import type { RmmzParamCore_Boolean } from "./boolean";
import type { RmmzParamTextFields } from "./metaTextField";
import type { RmmzParamCore_Number } from "./numbers";
import type { DataKindUnion, RmmzParamCore_DataId } from "./rpgDataId";
type NewRmmzParam<
  T extends { type: string; default: number | string | boolean }
> = T & Partial<RmmzParamTextFields>;

export type NewRmmzParam_Boolean = NewRmmzParam<RmmzParamCore_Boolean>;
export type NewRmmzParam_Number = NewRmmzParam<RmmzParamCore_Number>;
export type NewRmmzParam_DataId = NewRmmzParam<
  RmmzParamCore_DataId<DataKindUnion>
>;
