import type {
  PluginCommandSchemaArray,
  PluginParam,
  PluginParamEx,
  PluginSchemaArray,
  PluginStructSchemaArrayFilterd,
} from "./arraySchemaTypes";
import type {
  StructRefParam,
  StructArrayRefParam,
  RpgVariableParam,
  RpgVariableArrayParam,
  FileParam,
  FileArrayParam,
} from "./primitive";

export type StructPluginParam = PluginParamEx<
  StructRefParam | StructArrayRefParam
>;

export interface PluginCommandSchemaArrayEx3<T extends PluginParam>
  extends PluginCommandSchemaArray {
  command: string;
  desc?: string;
  text?: string;
  args: T[];
}

export interface PluginSchemaArrayEx2<T extends PluginParam>
  extends PluginSchemaArray {
  commands: PluginCommandSchemaArrayEx3<T | StructPluginParam>[];
  params: (T | StructPluginParam)[];
  structs: PluginStructSchemaArrayFilterd<T | StructPluginParam>[];
}

export type PluginVariableSchema = PluginSchemaArrayEx2<
  PluginParamEx<RpgVariableParam | RpgVariableArrayParam>
>;

export type PluginFileParamsSchema = PluginSchemaArrayEx2<
  PluginParamEx<FileParam | FileArrayParam>
>;
