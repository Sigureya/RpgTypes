import type {
  ArrayParam,
  ParamKinds,
  PluginStructSchemaArray,
  PrimitiveParam,
  ScalaParam,
  StructArrayRefParam,
  StructRefParam,
} from "@RpgTypes/rmmz/plugin";

export interface StructCollection {
  matchedStructs: Set<string>;
  nestedStructs: Set<string>;
  targetKinds: Set<ParamKinds>;
  targetArrayKinds: Set<`${ParamKinds}[]`>;
}

export interface PluginParamGroups<T extends PrimitiveParam = PrimitiveParam> {
  single: NamedAttribute<ScalaParam>[];
  array: NamedAttribute<Extract<T, ArrayParam>>[];
  struct: NamedAttribute<StructRefParam>[];
  structArray: NamedAttribute<StructArrayRefParam>[];
}

export interface NamedAttribute<T> {
  name: string;
  attr: T;
}

export interface FilterdPlugin<T extends PrimitiveParam = PrimitiveParam> {
  params: PluginParamGroups<T>;
  structs: PluginStructSchemaArray[];
  commands: Cmd2[];
}

export interface Cmd2 {
  command: string;
  desc?: string;
  text?: string;
  args: PluginParamGroups;
}
