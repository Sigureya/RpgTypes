import type {
  ArrayParam,
  PrimitiveParam,
  StructArrayRefParam,
  StructRefParam,
} from "./kinds";

export interface PluginParamGroups<T = PrimitiveParam> {
  single: Exclude<T, ArrayParam>[];
  array: Extract<T, ArrayParam>[];
  structs: StructRefParam[];
  structArray: StructArrayRefParam[];
}
