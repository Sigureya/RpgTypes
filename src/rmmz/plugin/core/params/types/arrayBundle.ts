import type {
  PluginCommandSchemaArray,
  PluginCommandSchemaArrayEx3,
} from "./arrayCommands";
import type {
  PluginStructSchemaArray,
  PluginStructSchemaArrayFilterd,
} from "./arrayStructs";
import type {
  PluginParam,
  PluginParamEx,
  StructPluginParam,
} from "./paramItem";
import type {
  RpgVariableParam,
  RpgVariableArrayParam,
  FileParam,
  FileArrayParam,
} from "./primitive";

export interface PluginSchemaArray {
  commands: PluginCommandSchemaArray[];
  params: PluginParam[];
  structs: PluginStructSchemaArray[];
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
