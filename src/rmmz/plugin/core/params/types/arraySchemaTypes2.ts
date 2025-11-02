import type { PluginSchemaArray } from "./bundleArray";
import type { PluginCommandSchemaArrayEx3 } from "./commandsArray";
import type { PluginParamEx, PluginParam } from "./paramItem";
import type {
  StructRefParam,
  StructArrayRefParam,
  RpgVariableParam,
  RpgVariableArrayParam,
  FileParam,
  FileArrayParam,
} from "./primitive";
import type { PluginStructSchemaArrayFilterd } from "./structs";

export type StructPluginParam = PluginParamEx<
  StructRefParam | StructArrayRefParam
>;

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
