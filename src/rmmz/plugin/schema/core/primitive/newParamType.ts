import type { RmmzParamCore_Boolean } from "./boolean";
import type { RmmzParamCore_Number } from "./numbers";
import type { DataKindUnion, RmmzParamCore_DataId } from "./rpgDataId";
import type { RmmzParamCore_String } from "./string";
import type { RmmzParamTextFields } from "./x-rpg-param2";
type NewRmmzParam<
  T extends { type: string; default: number | string | boolean }
> = T & Partial<RmmzParamTextFields>;

export type NewRmmzParam_Boolean = NewRmmzParam<RmmzParamCore_Boolean>;
export type NewRmmzParam_Number = NewRmmzParam<RmmzParamCore_Number>;
export type NewRmmzParam_String = NewRmmzParam<RmmzParamCore_String>;
export type NewRmmzParam_DataId = NewRmmzParam<
  RmmzParamCore_DataId<DataKindUnion>
>;

export type NewRmmzParam_Unknown<T extends number | string | boolean = number> =
  NewRmmzParam<{
    type: "";
    default: T;
  }>;
