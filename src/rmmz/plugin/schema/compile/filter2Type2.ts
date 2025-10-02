import type {
  ArrayParam,
  PrimitiveParam,
  StructArrayRefParam,
  StructRefParam,
} from "./kinds";

export interface PluginParamGroups<T = PrimitiveParam> {
  single: { name: string; attr: Exclude<T, ArrayParam> }[];
  array: { name: string; attr: Extract<T, ArrayParam> }[];
  struct: StructRefParam[];
  structArray: StructArrayRefParam[];
}
