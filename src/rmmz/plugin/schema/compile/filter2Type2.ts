import type {
  ArrayParam,
  PrimitiveParam,
  ScalaParam,
  StructArrayRefParam,
  StructRefParam,
} from "./kinds";

export interface PluginParamGroups<T = PrimitiveParam> {
  single: NamedAttribute<ScalaParam>[];
  array: NamedAttribute<Extract<PrimitiveParam, ArrayParam>>[];
  struct: NamedAttribute<StructRefParam>[];
  structArray: NamedAttribute<StructArrayRefParam>[];
}

export interface NamedAttribute<T> {
  name: string;
  attr: T;
}
