import type {
  PluginCommandSchemaArray,
  PluginParam,
  PluginParamEx,
  PluginSchemaArray,
  PluginStructSchemaArrayEx,
} from "./arraySchemaTypes";
import type {
  StructRefParam,
  StructArrayRefParam,
  RpgVariableParam,
  RpgVariableArrayParam,
  FileArrayParam,
  FileParam,
} from "./primitiveParams";

export type StructPluginParam = PluginParamEx<
  StructRefParam | StructArrayRefParam
>;

export interface PluginCommandSchemaArrayEx<T extends PluginParam>
  extends PluginCommandSchemaArray {
  command: string;
  desc?: string;
  text?: string;
  args: T[];
}

export interface PluginSchemaArrayEx<T extends PluginParam>
  extends PluginSchemaArray {
  commands: PluginCommandSchemaArrayEx<T | StructPluginParam>[];
  params: (T | StructPluginParam)[];
  structs: PluginStructSchemaArrayEx<T | StructPluginParam>[];
}

export type PluginVariableSchema = PluginSchemaArrayEx<
  PluginParamEx<RpgVariableParam | RpgVariableArrayParam>
>;

export type PluginFileParamsSchema = PluginSchemaArrayEx<
  PluginParamEx<FileParam | FileArrayParam>
>;
